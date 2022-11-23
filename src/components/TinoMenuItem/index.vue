<template>
  <view :class="[ namespace, active === route ? 'is-active' : '' ]" :style="{ '--active-text-color': activeTextColor, '--text-color': textColor, height: useHeight, '--tino-menu-hover-bg-color': 'var(--tino-color-info-light-9)' }" @click="itemClick">
    <view :class="`${namespace}__title`">
      <!-- 自定义前置图标 -->
      <slot name="suffix-icon" v-if="suffixIcon">
        <tino-icon :name="suffixIcon" />
      </slot>
      <slot />
    </view>
    <!-- 自定义后置图标 -->
    <slot name="prefix-icon" v-if="instance?.parent?.props.direction === 'vertical' && instance?.parent?.props.showArrow">
      <tino-icon name="right-light" />
    </slot>
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface MenuItemProps {
  // 前置图标
  suffixIcon?: string
  // 文本颜色
  textColor?: string
  // 活跃状态下的文本颜色
  activeTextColor?: string
  // menuitem 的标识符
  route: string | Function
  // menuitem 的高度设置
  height?: string | number
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  height: 'auto',
  textColor: '#303133',
  activeTextColor: '#409EFF'
})

const instance = getCurrentInstance()

// h5 -> attrs app -> props
const active = computed(() => instance?.parent?.props.active)
const namespace = useNamespace('menu-item')
const useHeight = computed(() => {
  let height = props.height && props.height !== 'auto' ? props.height : instance?.parent?.props.itemHeight
  return typeof height === 'string' ? height : `${height}rpx`
})

const itemClick = () => {
  if (props.route && typeof props.route === 'string') {
    uni.navigateTo({
      url: props.route,
      animationType: instance?.parent?.props.direction === 'horizontal' ? 'fade-in' : 'slide-in-right',
      animationDuration: 300
    })
    return
  }
  else if (props.route && typeof props.route === 'function') {
    props.route()
  }
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>
