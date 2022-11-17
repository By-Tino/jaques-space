<template>
  <text :class="[ useNamespace, 'tino-iconfont', `tino-icon-${name}` ]" :style="{ fontSize: size + 'rpx', color }" @click="emits('click')" />
</template>

<script lang="ts" setup>

import cssVars from '@/assets/styles/tino-design-ui/var.module.scss'

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

const emits = defineEmits(['click'])

const useNamespace = cssVars.prefix + '-icon'

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>