<template>
  <view
    :class="[ useNamespace, `is-${direction}` ]"
    :style="{ height }"
    :active="active"
  >
    <slot />
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

interface MenuProps {
  // menu 的布局方向
  direction?: 'horizontal' | 'vertical'
  // menu 的高度
  height?: number | string
  // 当前活跃状态下的菜单项
  active: string
}

const props = withDefaults(defineProps<MenuProps>(), {
  direction: 'horizontal',
  height: 'auto'
})

const store = useStore()
const useNamespace = store.prefix + '-menu'

</script>

<style lang="scss" scoped>
@import 'index';
</style>
