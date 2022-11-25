<template>
  <view :class="[ namespace ]">
    <tino-status-bar color="#000" statusColor="#fff"/>
		<tino-navigator color="#5C5D79">About Me</tino-navigator>
    <view :class="[ namespace + '-content' ]">
      <view :class="[ namespace + '-head' ] ">
        <view :class="[ namespace + '-radius' ]">
          <text style="font-size: 40rpx;color: #fff">+</text>
        </view>
        <text style="font-size: 24rpx;color: #636363;margin-top: 6rpx;">Upload Your Avatar</text>
      </view>
      <view :class="[ namespace + '-name' ]">
        <tino-input style="margin-top: 58rpx;"/>
        <text>Full Name</text>
      </view>
      <view :class="[ namespace + '-name' ]">
        <tino-input />
        <text>Phone</text>
      </view>
      <view :class="[ namespace + '-radio' ]">
        <view class="male" :class="{ famale : isTure}" @click="Update">
          <view class="male_radio" :class="{ famale_radio : isTure}"></view>
          <text style="font-size: 24rpx;color: #333;margin-left:28rpx;">Male</text>
        </view>
        <view class="male" :class="{ famale : !isTure}" @click="Update">
          <view class="famale_radio" :class="{ male_radio : isTure}"></view>
          <text style="font-size: 24rpx;color: #666666;margin-left:28rpx;">Female</text>
        </view>
      </view>
      <view :class="[ namespace + '-day'] ">
        <view>Year of birth</view>-
        <view>Month</view>-
        <view>Day</view>
      </view>
      <view :class="[ namespace + '-name' ]">
        <tino-input style="margin-top: 58rpx;"/>
        <text>Email</text>
      </view>
      <view :class="[ namespace + '-name' ]">
        <tino-input />
        <text>University</text>
      </view>
      <view :class="[ namespace + '-footer' ]">
        <tino-button :size="338" color="#3EBDA3">next</tino-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useNamespace } from '@/hooks'
import { ref } from 'vue'


const isTure = ref(false)

const namespace = useNamespace('about')

const Update = () => {
  isTure.value=!isTure.value
}
</script>

<style lang="scss" scoped>
@import 'index';
</style>