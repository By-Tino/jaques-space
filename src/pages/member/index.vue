<template>
	<view class="member">
		<view class="member_perpetual">
			<view>
				<text class="iconfont icon-licai"></text>
			</view>
			<view class="perpetual_center">
				<text style="font-size: 28rpx;color: #fff;font-weight: 700;">Perpetual</text>
				<text style="font-size: 28rpx;color: #827F80;">Membership is valid for ever</text>
			</view>
			<view class="perpetual_right">
				<text style="font-size: 40rpx;font-weight: 700;color: #E3B87B;">168</text>
				<text class="icon"><tino-icon class="tino-icon-meiyuan"/>1288</text>
			</view>
		</view>
		<view class="member_timeLength">
			<text>Time Length</text>
		</view>
		<view class="member_onemonth piblic">
			<view style="display: flex;flex-direction: column;">
				<text class="title">One Month</text>
				<text class="title_context">Membership is valid for 30 days</text>
			</view>
			<view style="margin-left: 138rpx;">
				<text class="iconfont icon-meiyuan num" style="font-size: 28rpx;"></text>
				<text class="num" style="font-size: 60rpx;">12</text>
			</view>
		</view>
		<view class="member_onequarter piblic">
			<view style="display: flex;flex-direction: column;">
				<text class="title">One Quarter</text>
				<text class="title_context">Membership is valid for 90 days</text>
			</view>
			<view style="margin-left: 138rpx;">
				<text class="iconfont icon-meiyuan num" style="font-size: 28rpx;"></text>
				<text class="num" style="font-size: 60rpx;">30</text>
			</view>
		</view>
		<view class="member_oneyear piblic">
			<view style="display: flex;flex-direction: column;">
				<text class="title">One Year</text>
				<text class="title_context">Membership is valid for  360 days</text>
			</view>
			<view style="margin-left: 138rpx;display: flex;flex-direction: column;align-items: center;">
				<text style="font-size: 40rpx;color: #E3B87B;font-weight: 700;9">98</text>
				<text class="iconfont icon-meiyuan" style="font-size: 24rpx;color: #827F80;text-decoration: line-through;">120</text>
			</view>
		</view>
		
		<view class="member_footer">
			<view class="iconfont icon-meiyuan money">98</view>
			<view class="buy">Buy</view>
		</view>
	</view>
</template>

<script setup lang="ts">
</script>

<style>
	/* 公共样式 */
.piblic{
	display: flex;
	align-items: center;
	width: 670rpx;
	height: 160rpx;
	border-radius: 8rpx;
	background: linear-gradient(to right,#414A65,#202639);
	overflow: hidden;
	margin-bottom: 40rpx;
	padding: 0 40rpx;
	box-sizing: border-box;
}
.title{
	font-size: 28rpx;
	font-weight: 700;
	color: #fff;
	margin-bottom: 24rpx;
}
.title_context{
	font-size: 24rpx;
	color: #827F80;
}
.num{
	font-weight: 700;
	color: #E3B87B;
}
	/* 公共样式 */

.member{
	width: 100%;
	height: 100vh;
	background: #1D191F;
	padding: 40rpx 40rpx 0 40rpx;
	box-sizing: border-box;
}
.member .member_perpetual{
	position: relative;
	padding: 0 40rpx;
	box-sizing: border-box;
	display: flex;
	width: 670rpx;
	height: 160rpx;
	border-radius: 8rpx;
	background: linear-gradient(to right,#414A65,#202639);
}
.member .member_perpetual .icon-licai{
	position: absolute;
	font-size: 90rpx;
	color: #B16A2B;
	margin: 36.88rpx 0 43.8rpx 0;
}
.member .member_perpetual .perpetual_center{
	display: flex;
	flex-direction: column;
	margin: 44rpx 0 0 100rpx;
}
.member .member_perpetual .perpetual_right{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 38rpx 0 0 20rpx;
}
.member .member_perpetual .perpetual_right .icon,.tino-icon-meiyuan{
	font-size: 24rpx;
	color: #827F80;
	text-decoration: line-through;
}
.member .member_timeLength{
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	color: #fff;
	font-weight: 700;
	margin: 40rpx 0;
}
.member .member_footer{
	display: flex;
	justify-content: space-between;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 120rpx;
	background: #202639;
	padding: 0 40rpx;
	box-sizing: border-box;
}
.member .member_footer .money{
	font-size: 40rpx;
	color: #E3B87B;
	font-weight: 700;
	line-height: 120rpx;
}
.member .member_footer .buy{
	width: 136rpx;
	height: 80rpx;
	background: #DDAB68;
	text-align: center;
	line-height: 80rpx;
	font-size: 40rpx;
	font-weight: 700;
	color: #1D191F;
	border-radius: 8rpx;
	margin-top: 20rpx;
}
</style>