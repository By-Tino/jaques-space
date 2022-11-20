<template>
  <view :class="[ namespace ]" :style="labelPosition">
    <view :class="[ namespace + '__label' ]" :style="{ width: labelWidth }">{{ label }}</view>
    <view :class="[ namespace + '__content' ]">
      <slot />
    </view>
  </view>
</template>

<script lang="ts" setup>

import { CSSProperties } from 'vue'
import { Position } from '@/typings'
import { useNamespace } from '@/hooks'
import { VALID_CSS_VALUE } from '@/utils'

interface FormItemProps {
  // 表单项的标题文本
  label?: string
  // 表单项的宽度设定
  labelWidth?: string | number
}

const props = withDefaults(defineProps<FormItemProps>(), {

})

const instance = getCurrentInstance()
const namespace = useNamespace('form-item')

const labelWidth = computed(() => {
  const width = instance?.parent?.props.labelWidth as (string | number)
  return VALID_CSS_VALUE(props.labelWidth ? props.labelWidth : width)
})

const labelPosition = computed(() => {
  const position = instance?.parent?.props.labelPosition as Position
  switch (position) {
    case 'center':
      return { textAlign: 'center' } as CSSProperties
    case 'left':
      return { textAlign: 'left' } as CSSProperties
    case 'right':
      return { textAlign: 'right' } as CSSProperties
    case 'top':
      return { flexDirection: 'column' } as CSSProperties
    default:
      return {} as CSSProperties
  }
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
