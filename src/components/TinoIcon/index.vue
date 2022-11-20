<template>
  <text :class="[ useNamespace, `${store.prefix}-iconfont`, `tino-icon-${name}` ]" :style="{ fontSize: useSize, color }" @click="emits('click')" />
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

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

const store = useStore()
const emits = defineEmits(['click'])
const useNamespace = computed(() => store.prefix + '-icon')
const useSize = computed(() => typeof props.size === 'number' ? props.size + 'rpx' : props.size)

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>