<template>
	<view class="payment">
		<view class="payment_bar"></view>
		<view class="payment_nav">
			<tino-icon name="left" color="#fff" :size="36" style="float: left;"/>
			<text style="font-weight: 700;color: #fff;">Payment</text>
		</view>
		<view class="payment_center">
			<view class="center_Perpetual">
				<tino-avatar src="../../assets/images/Frame.png" mode="widthFix" width="80rpx"/>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.payment {
	height: 100vh;
	background: #1D191F;
	.payment_bar {
		height: var(--status-bar-height);
	}
	.payment_nav {
		text-align: center;
		padding: 40rpx;
		background: #202639;
	}
	.payment_center{
		background: #1D191F;
		padding: 40rpx 40rpx 0 40rpx;
		box-sizing: border-box;
		.center_Perpetual{
			width: 670rpx;
			height: 160rpx;
			border-radius: 8rpx;
			background: linear-gradient(to right,#414A65,#202639);
			padding: 40rpx;
			box-sizing: border-box;
		}
	}
}
</style>