<template>
	<view class="main">
		<view class="main_top">

			<view class="top_name">
				<text>Jaques Tino</text>
				<text class="iconfont icon-bianji" @click="Updatename"></text>
			</view>

			<view class="head_img">
				<image src="../../images/head_img.jpg"></image>
			</view>

			<view class="sex_ID">
				<view class="sex_man">
					<text class="iconfont icon-xingbie_nan"></text>
					<text>21</text>
				</view>
				<view class="ID">
					<text>ID: 828941260</text>
				</view>
			</view>

			<view class="title_num">
				<view>
					<text style="margin: 0 0 20rpx 60rpx;">58</text>
					<text style="margin: 0 0 0 36rpx;">Articles</text>
				</view>
				<view>
					<text style="margin: 0 0 20rpx 45rpx;">15.2k</text>
					<text style="margin-left: 34rpx;">Popularity</text>
				</view>
				<view>
					<text style="margin: 0 0 20rpx 65rpx;">104</text>
					<text style="margin-left: 46rpx;">Favorites</text>
				</view>
			</view>

			<view class="footer_title">
				<text style="font-size: 40rpx;color: #F3CC96;font-weight: 700;margin: 0 20rpx 0 30rpx;">VIP</text>
				<text style="font-size: 28rpx;color: #E7FEFC;">No member has been opened</text>
				<button>To Open</button>
			</view>
		</view>
		<view class="main_center">
			<view>
				<text>User profile</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
			<view>
				<text>CV online</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
			<view>
				<text>List of articles</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
			<view>
				<text>Operation setup</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
			<view>
				<text>My store</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
			<view>
				<text>Log out</text>
				<text class="iconfont icon-youjiantou1"></text>
			</view>
		</view>
		
		<view class="Updatename" v-show="Show.bol"></view>
	</view>
</template>

<script setup lang="ts">
	import { ref , reactive} from 'vue'
	const title = ref('jaques-space')
	
	let Show=reactive({
		bol:false
	})
	
	const Updatename=()=>{
		if(Show.bol==false){
			Show.bol=true
		}
		else{
			Show.bol=false
		}
	}
</script>

<style>
	.main_top {
		position: relative;
		padding-top: calc(var(--status-bar-height) + 20px);
		width: 750rpx;
		height: 490rpx;
		background: linear-gradient(#64B9B4, #68CAB1);
	}

	.main_top .head_img image {
		position: absolute;
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		right: 36rpx;
		top: 40rpx;
	}

	.main_top .top_name {
		font-size: 40rpx;
		font-weight: 700;
		color: #fff;
		margin-left: 30rpx;
	}

	.main_top .top_name .icon-bianji {
		font-size: 40rpx;
		margin-left: 17.76rpx;
	}

	.main_top .sex_ID {
		display: flex;
	}

	.main_top .sex_ID .sex_man {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 10rpx;
		box-sizing: border-box;
		width: 100rpx;
		height: 48rpx;
		background: #7CDAA6;
		border-radius: 24rpx;
		margin: 30rpx 0 0 30rpx;
		font-size: 24rpx;
		color: #fff;
	}

	.main_top .sex_ID .ID {
		font-size: 28rpx;
		color: #E7FEFC;
		margin: 35rpx 0 0 20rpx;
	}

	.main_top .title_num {
		display: flex;
		margin-top: 58rpx;
	}

	.main_top .title_num view {
		display: flex;
		flex-direction: column;
	}

	.main_top .title_num view text:nth-child(1) {
		font-size: 40rpx;
		font-weight: 700;
		color: #fff;
	}

	.main_top .title_num view text:nth-child(2) {
		font-size: 28rpx;
		color: #E7FEFC;
	}

	.main_top .footer_title {
		display: flex;
		align-items: center;
		position: absolute;
		width: 684rpx;
		height: 100rpx;
		background: linear-gradient(to right, #202639, #414A65);
		border-radius: 24rpx 24rpx 0 0;
		bottom: 0;
		left: 30rpx;
	}

	.main_top .footer_title button {
		width: 160rpx;
		height: 60rpx;
		background: #3EBDA3;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 60rpx;
	}

	.main .main_center view {
		position: relative;
		width: 750rpx;
		height: 120rpx;
		line-height: 120rpx;
	}

	.main .main_center view text:nth-child(1) {
		position: absolute;
		left: 52rpx;
		font-size: 28rpx;
	}

	.main .main_center view text:nth-child(2) {
		position: absolute;
		right: 60rpx;
		font-size: 24rpx;
		color: #333;
	}

	.main .Updatename{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgb(0 0 0 / .7);
	}
</style>
