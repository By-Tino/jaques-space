<template>
  <view :class="[ namespace, `is-${mode}` ]" :style="{ gap: itemGap }">
    <slot />
  </view>
</template>

<script lang="ts" setup>

import { GET_TYPE, VALID_CSS_VALUE } from '@/utils'
import { useNamespace, useValidate } from '@/hooks'
import type { Position, Alignment, AllFormRules, FormErrors } from '@/typings'

interface ModalProps {
  [prop: string]: any
}

interface FormProps {
  // 表单绑定的模型
  modal: ModalProps
  // 表单的验证规则
  rules?: AllFormRules
  // 设置 label 的宽度
  labelWidth?: number | string
  // 设置 label 的位置
  labelPosition?: Position
  // 是否显示冒号
  showColon?: boolean
  // 表单项的排列方式
  mode?: Alignment
  // 表单项之间的间距
  itemGap?: number | string
}

const namespace = useNamespace('form')

const props = withDefaults(defineProps<FormProps>(), {
  showColon: false,
  labelPosition: 'top',
  mode: 'vertical',
  itemGap: 60
})

const itemGap = computed(() => VALID_CSS_VALUE(props.itemGap))

// 表单验证
const validator = async () => {
  let result: [boolean, FormErrors[] | null] = [true, null]
  if (!!props.rules) {
    for (let ruleKey of Object.keys(props.rules)) {
      const rule = props.rules[ruleKey]
      const validate = await useValidate(ruleKey, props.modal[ruleKey], Array.isArray(rule) ? rule : [rule])
      if (!validate[0]) {
        result.splice(0, 1, validate[0])
        !result[1] ? result[1] = [ validate[1] ] : result[1].push(validate[1])
      }
    }
  }
  console.log(result)
  return result
}

// 对外暴露方法，即父组件可以通过 ref 获取到
defineExpose({
  validator
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
