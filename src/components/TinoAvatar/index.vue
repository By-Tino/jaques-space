<template>
  <view :class="[ useNamespace ]">
    <image
      :src="src"
      :mode="mode"
      :draggable="draggable"
      :style="{ width, height, borderRadius }"
      @error="updateStatus('error')"
      @load="updateStatus('success')"
    />
    <view :class="[ useNamespace + '__error' ]" :style="{ borderRadius }" v-if="status === 'error'">
      <tino-icon name="image-load-error" size="var(--tino-avatar-text-size)" />
    </view>
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'
import type { ImageStatus, ImageMode } from '@/typings'

interface AvatarProps {
  // 定义图片的路径
  src: string
  // 定义图片该采用何种模式进行渲染
  mode?: ImageMode
  // 是否能拖动 图片
  draggable?: boolean
  // 设置 图片 的宽度
  width?: string
  // 设置 图片 的高度
  height?: string
  // 是否需要圆角边框
  rounded?: boolean
}

const store = useStore()
const status = ref<ImageStatus>('default')

const props = withDefaults(defineProps<AvatarProps>(), {
  mode: 'scaleToFill',
  draggable: false,
  rounded: false
})

const borderRadius = computed(() => props.rounded ? '50%' : '10rpx')
const useNamespace = computed(() => store.prefix + '-avatar')

const updateStatus = (imageStatus: ImageStatus) => {
  status.value = imageStatus
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>
