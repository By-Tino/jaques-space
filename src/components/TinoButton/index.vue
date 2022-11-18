<template>
  <button
    :disabled="disabled"
    :class="[ useNamespace, useSize, useTheme ]"
    :style="{
      borderWidth: border ? '2rpx' : '0',
      ...useColor(store.prefix, 'button', color || '', disabled).value
    }"
    @click="emits('click')"
  >
    <tino-icon name="loading" class="loading" v-if="loading" />
    <!-- 自定义前置图标 -->
    <slot name="suffix-icon" v-else>
      <tino-icon :name="suffixIcon" class="suffix-icon" v-if="suffixIcon" />
    </slot>
    <slot />
    <!-- 自定义后置图标 -->
    <slot name="prefix-icon">
      <tino-icon :name="prefixIcon" class="prefix-icon" v-if="prefixIcon" />
    </slot>
  </button>
</template>

<script lang="ts" setup>

import { useColor } from '@/hooks'
import { useStore } from '@/pinia/config'
import type { ButtonTypes, ButtonSize } from '@/typings'

interface TinoProps {
  // 定义 button 的背景颜色
  color?: string
  // 定义 button 的主题
  type?: ButtonTypes
  // 定义 button 的大小
  size?: ButtonSize
  // 定义前置 icon 的类名
  suffixIcon?: string
  // 定义后置 icon 的类名
  prefixIcon?: string
  // 是否显示加载图标
  loading?: boolean
  // 是否显示 button 的边框
  border?: boolean
  // 是否禁用按钮
  disabled?: boolean
}

const props = withDefaults(defineProps<TinoProps>(), {
  type: 'default',
  size: 'default',
  loading: false,
  border: true,
  disabled: false
})

const store = useStore()
const emits = defineEmits(['click'])
const useNamespace = computed(() => store.prefix + '-button')
const useSize = computed(() => props.size !== 'default' ? `is-${props.size}` : '')
const useTheme = computed(() => `${store.prefix}-button--${props.type}`)

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>
