<template>
  <view class="layout-main">
    <view :class="[ useNamespace ]" :style="{ paddingTop: 'var(--status-bar-height)' }">
      <slot />
    </view>
    <tino-menu
      height="100rpx"
      :active="`pages/${namespace}/index`"
    >
      <tino-menu-item suffix-icon="home" route="pages/home/index">Home</tino-menu-item>
      <tino-menu-item suffix-icon="navigate" route="pages/navigate/index">Navigate</tino-menu-item>
      <tino-menu-item suffix-icon="message" route="pages/message/index">Message</tino-menu-item>
      <tino-menu-item suffix-icon="mine" route="pages/mine/index">Mine</tino-menu-item>
    </tino-menu>
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

interface LayoutProps {
  // 命名空间
  namespace: string
}

const props = withDefaults(defineProps<LayoutProps>(), {})

const store = useStore()
const useNamespace = computed(() => store.prefix + '-' + props.namespace)

</script>

<style lang="scss" scoped>
@import 'index';
</style>
