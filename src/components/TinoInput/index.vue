<template>
  <view :class="[ namespace ]">
    <view :class="[ namespace + '__wrapper', isFocus ? `${namespace + '__wrapper'}_focus`: '', !!errmsg ? `${useNamespace + '__wrapper'}_error` : '' ]">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="handleBlur"
        @input="handleInput"
      />
    </view>
    <view :class="[ namespace + '__error' ]" v-show="showError && !!errmsg">
      <slot name="error" :errmsg="errmsg">
        <tino-icon name="error-fill" />
        {{ errmsg }}
      </slot>
    </view>
  </view>
</template>

<script lang="ts" setup>

import { GET_TYPE } from '@/utils'
import { useNamespace } from '@/hooks'
import { FormRules, TriggerMethods } from '@/typings'

interface InputProps {
  // 提示性文本
  placeholder?: string
  // 内容
  modelValue?: string
  // 表单规则
  rules?: FormRules[] | FormRules
  // 初始化规则校验的触发方式
  trigger?: TriggerMethods
  // 是否显示错误信息
  showError?: boolean
}

const isFocus = ref(false)
const inputValue = ref('')
const errmsg = ref('')
const useBlurRules = ref<FormRules []>([])
const useChangeRules = ref<FormRules []>([])
const emits = defineEmits(['update:modelValue'])
const namespace = useNamespace('input')

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  modelValue: '',
  trigger: 'blur',
  showError: true
})

const handleResponse = (errmsg?: string): Promise<boolean> => new Promise(resolve => {
    resolve(!errmsg)
})

const checkRules = async (routes: FormRules[]) => {
  for (const rule of routes) {
    const validator = rule.validator
    if (!!validator && typeof validator === 'function') {
      const result = await validator(inputValue.value, handleResponse)
      if (!result) {
        errmsg.value = rule.message
        return
      }
    }
    else {
      const keys = Object.keys(rule)
      const result = keys.every(key => {
        switch (key) {
          case 'min':
            return inputValue.value.length >= (rule[key] as number)
          case 'max':
            return inputValue.value.length <= (rule[key] as number)
          case 'required':
            return !rule[key] || inputValue.value.length > 0
          default:
            return true
        }
      })
      if (!result) {
        errmsg.value = rule.message
        return
      }
    }
  }
  errmsg.value = ''
}

const handleBlur = async () => {
  isFocus.value = false
  // 规则校验
  checkRules(useBlurRules.value)
}

const handleInput = () => {
  emits('update:modelValue', inputValue.value)
  // 规则校验
  checkRules(useChangeRules.value)
}

onMounted(() => {
  const rules = props.rules
  
  if (!!rules) {
    const type = GET_TYPE(rules)
    // 如果 rules 是对象
    if (type === 'object') {
      
      if (typeof (rules as FormRules).trigger === 'string') {
        (rules as FormRules).trigger === 'blur' ? useBlurRules.value = ([rules] as FormRules[]) : useChangeRules.value = ([rules] as FormRules[])
      }
      else {
        (rules as FormRules).trigger?.includes('blur') && (useBlurRules.value = ([rules] as FormRules[]));
        (rules as FormRules).trigger?.includes('change') && (useChangeRules.value = ([rules] as FormRules[]))
      }
    }
    // 如果 rules 是数组
    else if (type === 'array') {
      useBlurRules.value = (rules as FormRules[]).filter(rule => typeof rule.trigger === 'string' ? rule.trigger === 'blur' : rule.trigger?.includes('blur'))
      useChangeRules.value = (rules as FormRules[]).filter(rule => typeof rule.trigger === 'string' ? rule.trigger === 'change' : rule.trigger?.includes('change'))
    }
  }
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
