<template>
  <view
    :active="active"
    :style="{ height: useHeight }"
    :class="[ namespace, `is-${direction}` ]"
  >
    <slot />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'
import type { Alignment } from '@/typings'

interface MenuProps {
  // menu 的布局方向
  direction?: Alignment
  // menu 的高度
  height?: number | string
  // 当前活跃状态下的菜单项
  active?: string
  // 统一设置 menuitem 的高度
  itemHeight?: string | number
  // 是否显示箭头
  showArrow?: boolean
}

const props = withDefaults(defineProps<MenuProps>(), {
  height: 'auto',
  showArrow: true,
  itemHeight: 'auto',
  direction: 'horizontal'
})

const namespace = useNamespace('menu')
const useHeight = computed(() => typeof props.height === 'number' ? props.height + 'rpx' : props.height)

</script>

<style lang="scss" scoped>
@import 'index';
</style>
