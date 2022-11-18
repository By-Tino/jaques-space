<template>
	<view class="edit">
		<view class="edit_border">
			<view class="edit_img">
				<image src="../../assets/images/head_img.jpg"></image>
			</view>
			<view class="img_border">
				<text class="iconfont icon-xiangji"></text>
			</view>
		</view>
		<view class="edit_input" style="margin-top: 120rpx;">
			<view class="input_user">
				<input type="text" class="public_input" placeholder="User Name" placeholder-style="font-size:40rpx;color:#B5B8C0;">
				<text class="iconfont icon-yonghu title_icon"></text>
			</view>
			<view class="input_email">
				<input type="text"  class="public_input" placeholder="Email Address" placeholder-style="font-size:40rpx;color:#B5B8C0;">
				<text class="iconfont icon-youjian title_icon"></text>
			</view>
			<view class="input_file">
				<input type="text" class="public_input" placeholder="User profile" placeholder-style="font-size:40rpx;color:#B5B8C0;">
				<text class="iconfont icon-wenzhangliebiaoxiangqing title_icon"></text>
			</view>
			<view class="box_sex">
				<text class="iconfont icon-tongxingbie"></text>
					<view class="sex_male">
						<radio :checked="num.Value==='1'" @click="radio('1')">male</radio>
					</view>
					<view class="sex_female">
						<radio :checked="num.Value==='2'" @click="radio('2')">female</radio>
					</view>
			</view>
			<view class="btn_update">
				UPDATE
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let num = reactive({
	Value:'1'
})

	
const radio=(e)=>{
	console.log(e)
	num.Value= e
}
</script>

<style lang="scss" scoped>
.public_input{
	width: 670rpx;
	height: 120rpx;
	border-radius: 10rpx;
	border: 2rpx solid #EFEEF3;
	margin: 60rpx 40rpx;
	box-sizing: border-box;
	padding-left: 134rpx;
}
.edit{
	padding-top: 60rpx;
	box-sizing: border-box;
}
.edit .edit_border{
	position: relative;
	width: 180rpx;
	height: 180rpx;
	border: 4rpx dashed #E8631E;
	border-radius: 50%;
	margin: 0 auto;
	padding: 6rpx;
	box-sizing: border-box;
}
.edit .edit_border .edit_img image{
	width: 160rpx;
	height: 160rpx;
	border-radius: 50%;
}
.edit .edit_border .img_border{
	position: absolute;
	top: 120rpx;
	left: 35rpx;
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	border: 4rpx solid #fff;
	background: #0B1834;
	color: #fff;
	text-align: center;
	line-height: 100rpx;
}
.edit .edit_border .icon-xiangji{
	font-size: 40rpx;
}
.edit .edit_input view{
	position: relative;
}
.edit .edit_input view .title_icon{
	position: absolute;
	top: 30rpx;
	left: 70rpx;
	font-size: 60rpx;
}
.edit .edit_input view .title_icon::after{
	content: "";
	position: absolute;
	left: 80rpx;
	top: 0;
	width: 2rpx;
	height: 60rpx;
	background: #EFEEF3;
}
.edit .edit_input .box_sex{
	position: relative;
	width: 670rpx;
	height: 120rpx;
	border-radius: 10rpx;
	border: 2rpx solid #EFEEF3;
	margin: 60rpx 40rpx;
}
.edit .edit_input .box_sex .icon-tongxingbie{
	position: absolute;
	top: 30rpx;
	left: 30rpx;
	font-size: 60rpx;
	color: #5C5D79;
}
.edit .edit_input .box_sex .icon-tongxingbie::after{
	content: "";
	position: absolute;
	left: 80rpx;
	top: 0;
	width: 2rpx;
	height: 60rpx;
	background: #EFEEF3;
}

.edit .edit_input .box_sex .sex_male{
	radio{
		position: absolute;
		left: 134rpx;
		top: 35rpx;
	}
}

.edit .edit_input .box_sex .sex_female{
	radio{
		position: absolute;
		left: 272rpx;
		top: 35rpx;
	}
}
.edit .edit_input .btn_update{
	width: 670rpx;
	height: 120rpx;
	background: #3EBDA3;
	margin: 60rpx 40rpx;
	border-radius: 10rpx;
	font-weight: 700;
	color: #fff;
	text-align: center;
	line-height: 120rpx;
}
</style>