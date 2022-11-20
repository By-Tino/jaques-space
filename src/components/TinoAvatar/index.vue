<template>
  <view :class="[ namespace ]">
    <image
      :src="src"
      :mode="mode"
      :draggable="draggable"
      :style="{ width, height, borderRadius }"
      @error="updateStatus('error')"
      @load="updateStatus('success')"
    />
    <view :class="[ namespace + '__error' ]" :style="{ borderRadius }" v-if="status === 'error' || !hasImage">
      <tino-icon :name="errorImage " size="var(--tino-avatar-text-size)" v-if="hasImage" />
      <tino-icon :name="noImage" size="var(--tino-avatar-text-size)" v-else />
    </view>
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'
import type { ImageStatus, ImageMode } from '@/typings'

interface AvatarProps {
  // 定义图片的路径
  src?: string
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
  // 自定义错误图片的显示
  errorImage?: string
  // 当图片路径为空时展示的图片
  noImage?: string
}

const status = ref<ImageStatus>('default')

const props = withDefaults(defineProps<AvatarProps>(), {
  mode: 'scaleToFill',
  draggable: false,
  rounded: false,
  errorImage: 'image-load-error',
  noImage: 'user'
})

const namespace = useNamespace('avatar')
const hasImage = computed(() => !!props.src)
const borderRadius = computed(() => props.rounded ? '50%' : '10rpx')

const updateStatus = (imageStatus: ImageStatus) => {
  status.value = imageStatus
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>
