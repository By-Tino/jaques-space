<template>
  <view
    :style="{
      paddingRight: closable ? '28rpx' : '',
      ...useColor(store.prefix, 'tag', color || '', false).value
    }"
    :class="[ namespace, useSize, useTheme, `is-${effect}` ]"
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
    <view class="closable-box" @click="handleClose" v-if="closable" />
  </view>
</template>

<script lang="ts" setup>

import { useColor } from '@/hooks'
import { useNamespace } from '@/hooks'
import { useStore } from '@/pinia/config'
import type { TagSize, TagTypes, DefineEffect } from '@/typings'

interface TinoProps {
  // 定义 tag 的背景颜色，层级最高，设置后 effect 和 type 设置的属性值将无效
  color?: string
  // 定义 tag 的主题
  type?: TagTypes
  // 定义 tag 的大小
  size?: TagSize
  // 定义前置 icon 的类名
  suffixIcon?: string
  // 定义后置 icon 的类名
  prefixIcon?: string
  // 是否允许 tag 可关闭
  closable?: boolean
  // 关闭 tag 之前的钩子，返回 true 或者调用 close 方法则表示关闭 tag
  beforeClose?: (close: Function) => boolean | undefined
  // 关闭 tag 之后的钩子
  afterClose?: () => void
  // 定义 tag 主题
  effect?: DefineEffect
}

const store = useStore()
const namespace = useNamespace('tag')

const props = withDefaults(defineProps<TinoProps>(), {
  type: 'primary',
  size: 'default',
  closable: false,
  visable: true,
  effect: 'dark',
  beforeClose: () => () => true,
  afterClose: () => () => undefined
})

const visable = ref(true)
const useTheme = computed(() => `${store.prefix}-tag--${props.type}`)
const useSize = computed(() => props.size !== 'default' ? `is-${props.size}` : '')

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
