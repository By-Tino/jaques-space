<template>
  <view
    :class="[ namespace ]"
  >
    <tino-status-bar color="#000" statusColor="#fff"/>

		<tino-navigator color="#5C5D79">Resume</tino-navigator>

    <view class="img_view">
      <tino-avatar :src="useImageFile('Frame.png')" width="600rpx" height="600rpx"/>
      <view>No CV information yet, 
        <navigator url="/pages/mine/cv/aboutme/index" style="color: #7CBEBB;text-decoration: underline;display: inline-block;">Go to create</navigator>?
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useImageFile , useNamespace} from '@/hooks';

const namespace = useNamespace('cv')


</script>

<style lang="scss" scoped>
.#{$prefix}-cv {
  .img_view{
    width: 600rpx;
    height: 600rpx;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  text{
    margin-top: -55.2rpx;
  }
}
</style>
