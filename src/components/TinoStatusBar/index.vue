<template>
  <view :class="[ namespace ]" :style="{ background: color }" />
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface StatusBarProps {
  color?: string
}

const namespace = useNamespace('status-bar')
const props = withDefaults(defineProps<StatusBarProps>(), {
  color: 'white'
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
