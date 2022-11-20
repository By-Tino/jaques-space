<template>
  <view :class="[ namespace, `is-${mode}` ]" :style="{ gap: itemGap }">
    <slot />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'
import { VALID_CSS_VALUE } from '@/utils'
import type { FormRules, Position, Alignment } from '@/typings'

interface FormProps {
  // 表单绑定的模型
  modal: object
  // 表单的验证规则
  rules?: FormRules | FormRules[]
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

</script>

<style lang="scss" scoped>
@import 'index';
</style>
