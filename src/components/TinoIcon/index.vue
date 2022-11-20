<template>
  <text :class="[ namespace, 'tino-iconfont', `tino-icon-${name}` ]" :style="{ fontSize: useSize, color }" @click="emits('click')" />
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface IconProps {
  // 定义 icon 的名称
  name: string
  // 定义 icon 的字体大小
  size?: number | string 
  // 定义 icon 的字体颜色
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 28
})

const emits = defineEmits(['click'])
const namespace = useNamespace('icon')
const useSize = computed(() => typeof props.size === 'number' ? props.size + 'rpx' : props.size)

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>