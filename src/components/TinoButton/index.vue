<template>
  <button
    @click="emits('click')"
    :class="[ useNamespace, useSize ]"
    :style="{
      backgroundColor: useBackgroundColor,
      '--text-disabled-color': `var(--text-color-${props.type}-light)`,
      '--bg-color-disabled-color': `var(--color-${props.type}-light)`
    }"
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

import { useStore } from '@/pinia/config'

interface TinoProps {
  // 定义 tag 的背景颜色
  color?: string
  // 定义 tag 的主题
  type?: 'primary' | 'success' | 'error' | 'warning' | 'info'
  // 定义 tag 的大小
  size?: 'normal' | 'large' | 'small'
  // 定义前置 icon 的类名
  suffixIcon?: string
  // 定义后置 icon 的类名
  prefixIcon?: string
  // 是否显示加载图标
  loading?: boolean
}

const props = withDefaults(defineProps<TinoProps>(), {
  type: 'primary',
  size: 'normal',
  loading: false
})

const store = useStore()
const emits = defineEmits(['click'])
const useNamespace = computed(() => store.prefix + '-button')
const useSize = computed(() => props.size !== 'normal' ? `is-${props.size}` : '')
const useBackgroundColor = computed(() => {
  if (props.color) return props.color
  if (props.type) return `var(--color-${props.type})`
})

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>
