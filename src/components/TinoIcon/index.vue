<template>
  <text :class="[ useNamespace, `${store.prefix}-iconfont`, `tino-icon-${name}` ]" :style="{ fontSize: size + 'rpx', color }" @click="emits('click')" />
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

interface IconProps {
  // 定义 icon 的名称
  name: string
  // 定义 icon 的字体大小
  size?: number
  // 定义 icon 的字体颜色
  color?: string
}

withDefaults(defineProps<IconProps>(), {
  size: 28
})

const store = useStore()
const emits = defineEmits(['click'])
const useNamespace = computed(() => store.prefix + '-icon')

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>