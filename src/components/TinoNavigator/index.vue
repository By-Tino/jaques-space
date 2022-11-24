<template>
  <view :class="[ namespace ]">
    <view :class="[ namespace + '__wrapper' ]">
      <slot name="suffix-icon">
        <tino-icon name="left-light" :size="50" :color="color" @click="goBack" />
      </slot>
      <view :class="[ namespace + '__wrapper_content' ]" :style="{ color }">
        <slot />
      </view>
    </view>
    <slot name="prefix-icon" />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface NavigatorProps {
  color?: string
}

const namespace = useNamespace('navigator')
const props = withDefaults(defineProps<NavigatorProps>(), {
  color: '#333'
})

const goBack = () => {
  uni.navigateBack()
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>