<template>
  <view :class="[ useNamespace ]" :style="{ color: route === active ? activeTextColor : textColor }">
    <!-- 自定义前置图标 -->
    <slot name="suffix-icon" v-if="suffixIcon">
      <tino-icon :name="suffixIcon" />
    </slot>
    <slot />
    <!-- 自定义后置图标 -->
    <slot name="prefix-icon" v-if="prefixIcon">
      <tino-icon :name="prefixIcon" />
    </slot>
  </view>
</template>

<script lang="ts" setup>
import { useStore } from '@/pinia/config'

interface MenuItemProps {
  // 前置图标
  suffixIcon?: string
  // 后置图标
  prefixIcon?: string
  // 文本颜色
  textColor?: string
  // 活跃状态下的文本颜色
  activeTextColor?: string
  // menuitem 的标识符
  route: string
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  textColor: '#303133',
  activeTextColor: '#409EFF'
})

const instance = getCurrentInstance()

const store = useStore()
// h5 -> attrs app -> props
const active = computed(() => instance?.parent?.props.active)
const useNamespace = computed(() => store.prefix + '-menu-item')

</script>

<style lang="scss" scoped>
@import 'index';
</style>
