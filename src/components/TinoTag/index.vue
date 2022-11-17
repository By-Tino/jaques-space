<template>
  <view
    :style="{
      paddingRight: closable ? '28rpx' : '',
      backgroundColor: useBackgroundColor
    }"
    :class="[ useNamespace, useSize ]"
    v-show="visable"
  >
    <!-- 自定义前置图标 -->
    <slot name="suffix-icon">
      <tino-icon :name="suffixIcon" class="suffix-icon" v-if="suffixIcon" />
    </slot>
    <slot />
    <!-- 自定义后置图标 -->
    <slot name="prefix-icon">
      <tino-icon :name="prefixIcon" class="prefix-icon" v-if="prefixIcon" />
    </slot>
    <!-- 可关闭按钮 -->
    <tino-icon
      v-if="closable"
      :size="20"
      name="close"
      class="close-icon"
      @click="handleClose"
    />
    <view class="closable-box" @click="handleClose" />
  </view>
</template>

<script lang="ts" setup>

import cssVars from '@/assets/styles/tino-design-ui/var.module.scss'

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
  // 是否允许 tag 可关闭
  closable?: boolean
  // 关闭 tag 之前的钩子，返回 true 或者调用 close 方法则表示关闭 tag
  beforeClose?: (close: Function) => boolean
  // 关闭 tag 之后的钩子
  afterClose?: () => void
}

const visable = ref(true)
const emits = defineEmits(['update:visable'])

const props = withDefaults(defineProps<TinoProps>(), {
  type: 'primary',
  size: 'normal',
  closable: false,
  visable: true,
  beforeClose: () => true,
  afterClose: () => undefined
})

const useNamespace = cssVars.prefix + '-tag'
const useSize = computed(() => props.size !== 'normal' ? `is-${props.size}` : '')
const useBackgroundColor = computed(() => {
  if (props.color) return props.color
  if (props.type) return `var(--color-${props.type})`
})

// 关闭 tag
const close = () => {
  visable.value = false
}

// 关闭按钮被点击时的钩子
const handleClose = () => {
  const useContinue = props.beforeClose(close)
  useContinue && close()
  props.afterClose()
}

</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
