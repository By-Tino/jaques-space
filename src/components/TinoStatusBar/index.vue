<template>
  <view :class="[ namespace ]" :style="{ background: color }" />
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface StatusBarProps {
  color?: string
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
