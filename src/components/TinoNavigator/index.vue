<template>
  <view :class="[ namespace ]">
    <view :class="[ namespace + '__wrapper' ]">
      <slot name="suffix-icon">
        <tino-icon name="left-light" :size="50" color="#fff" @click="goBack" />
      </slot>
      <view :class="[ namespace + '__wrapper_content' ]">
        <slot />
      </view>
    </view>
    <slot name="prefix-icon" />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

const namespace = useNamespace('navigator')

const goBack = () => {
  uni.navigateBack()
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>