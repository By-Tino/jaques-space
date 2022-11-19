<template>
	<view class="main">
		<view class="main_top">
			<view class="top_name">
				<view class="name_left">
					<text>Jaques Tino</text>
					<tino-icon class="tino-icon-bianji" @click="Updatename"></tino-icon>
					<view class="sex_ID">
						<view class="sex_man">
							<text class="iconfont icon-xingbie_nan"></text>
							<text>21</text>
						</view>
						<view class="ID">
							<text>ID: 828941260</text>
						</view>
					</view>
				</view>
				<view class="head_img">
					<image src="../../assets/images/head_img.jpg"></image>
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
				<view>
					<text style="font-size: 40rpx;color: #F3CC96;font-weight: 700;margin-left: 30rpx;">VIP</text>
				</view>
				<view>
					<text style="font-size: 28rpx;color: #E7FEFC;">No member has been opened</text>
				</view>
				<view>
					<tino-button @click="member">To Open</tino-button>
				</view>
			</view>
		</view>
		<view class="main_center">
			<view  @click="edit">
				<text>User profile</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
			<view>
				<text>CV online</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
			<view>
				<text>List of articles</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
			<view>
				<text>Operation setup</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
			<view>
				<text>My store</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
			<view>
				<text>Log out</text>
				<tino-icon class="tino-icon-right"></tino-icon>
			</view>
		</view>
		
		<view class="Updatename" v-if="Show.bol">
			<view class="popup">
				<text style="font-size: 40rpx;font-weight: 700;">Update Profile</text>
				<input type="text" placeholder="Jaqeus Tino">
				<view class="btn">
					<tino-button  @click="Show.bol=false">cancel</tino-button>
					<tino-button>UPDATE</tino-button>
				</view>
			</view>
		</view>
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
	
	const member=()=>{
		uni.navigateTo({
			url:"/pages/member/index"
		})
	}
	
	const edit=()=>{
		uni.navigateTo({
			url:"/pages/index/Edit"
		})
	}
</script>

<style>
	.main_top {
		position: relative;
		padding-top: calc(var(--status-bar-height) + 40rpx);
		width: 750rpx;
		height: 490rpx;
		background: linear-gradient(#64B9B4, #68CAB1);
	}

	.main_top .top_name .head_img image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		margin-right: 36rpx;
	}
	
	.main_top .top_name {
		display: flex;
		justify-content: space-between;
		font-size: 40rpx;
		font-weight: 700;
		color: #fff;
		margin-left: 30rpx;
	}

	.main_top .top_name .tino-icon-bianji {
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
		margin: 30rpx 0 0 0;
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
		padding: 8rpx 30rpx;
		background: #3EBDA3;
		font-size: 28rpx;
		border-radius: 10rpx;
		color: #FFFFFF;
		border: none;
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
		z-index: 10000;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgb(0 0 0 / .7);
	}
	
	.uni-tabbar{
		z-index: 0;
	}
	
	.main .Updatename .popup{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin:  auto;
		width: 600rpx;
		height: 364rpx;
		background: #fff;
		border-radius: 16rpx;
		padding: 40rpx 0 0 40rpx;
		box-sizing: border-box;
	}
	
	.main .Updatename .popup input{
		width: 520rpx;
		height: 80rpx;
		margin-top: 40rpx;
		border: 2rpx solid #efeef3;
		border-radius: 10rpx;
		color: #BABBCF;
		font-size: 24rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}
	
	.main .Updatename .popup .btn{
		margin-top: 40rpx;
	}
	
	.main .Updatename .popup .btn button{
		float: left;
		border-radius: 10rpx;
		font-size: 28rpx;
	}
	
	.main .Updatename .popup .btn button:first-child{
		padding: 28rpx 42rpx;
		border: none;
		color: #95B1AE;
		background: #D9E9E2;
	}
	
	.main .Updatename .popup .btn button:last-child{
		border: none;
		color: #fff;
		padding: 28rpx 32rpx;
		background: #3EBDA3;
		margin-left: 40rpx;
	}
</style>
