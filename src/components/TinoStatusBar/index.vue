<template>
  <view :class="[ namespace ]" :style="{ background: color }" />
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface StatusBarProps {
  // 定义状态栏的背景色
  color?: string
  // 定义状态栏的文字颜色（不支持更新的）
  statusColor?: '#ffffff' | '#000000'
}

const namespace = useNamespace('status-bar')
const props = withDefaults(defineProps<StatusBarProps>(), {
  color: '#ffffff',
  statusColor: '#000000'
})

uni.setNavigationBarColor({
  frontColor: props.statusColor
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
