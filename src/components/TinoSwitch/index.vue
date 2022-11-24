<template>
  <view :class="[ namespace ]" @click="updateActive" :style="{ borderRadius, '--tino-switch-color': modelValue ? activeColor : inactiveColor }">
    <view :style="{ padding: modelValue ? '0 44rpx 0 8rpx' : '0 8rpx 0 44rpx' }" :class="[ namespace + '__content' ]">
      <text v-show="showText">{{ modelValue ? activeText : inactiveText }}</text>
    </view>
    <view :class="[ namespace + '__circle' ]" :style="{ left: modelValue ? 'calc(100% - 17px)' : 0 }" />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

interface SwitchProps {
  // 活跃状态下的文本
  activeText?: string
  // 失活状态下的文本
  inactiveText?: string
  // 开关当前所属状态
  modelValue?: boolean
  // 活跃状态下的颜色
  activeColor?: string
  // 失活状态下的颜色
  inactiveColor?: string
  // 是否展示文本
  showText?: boolean
}

const props = withDefaults(defineProps<SwitchProps>(), {
  activeText: 'Y',
  inactiveText: 'N',
  modelValue: false,
  activeColor: 'var(--tino-color-primary)',
  inactiveColor: 'var(--tino-color-error)',
  showText: false
})

const namespace = useNamespace('switch')
const emits = defineEmits(['update:modelValue'])
const instance = getCurrentInstance()

const borderRadius = ref<number | string>(0)

const updateActive = () => {
  emits('update:modelValue', !props.modelValue)
}

onMounted(() => {
  const query = uni.createSelectorQuery().in(instance)
  query.select(`.${namespace.value}`).boundingClientRect((data: any) => {
    borderRadius.value = `${data.height}rpx`
  }).exec()
  console.log(query)
  
  // TinoSwitch.value.style.borderRadius = (TinoSwitch.value.clientHeight / 2) * 2 + 'rpx'
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
