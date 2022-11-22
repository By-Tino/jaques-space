<template>
	<LayoutMain namespace="mine" use-status-bar>
		<view :class="[ useNamespace + '-header' ]">
			<!-- user 是登录后得到的用户信息 -->
			<view v-if="!!user" class="is-login">
				<view :class="[ useNamespace + '-header__userinfo' ]">
					<view>
						<view :class="[ useNamespace + '-header__userinfo_name' ]" @click="showUpdateUsername = true">Jaques Tino</view>
						<view>
							<tino-tag suffix-icon="sex-male" color="#7CDAA6">21</tino-tag>
							<text :class="[ useNamespace + '-header__userinfo_id' ]">ID: 828941260</text>
						</view>
					</view>
					<tino-avatar :src="useImageFile('head_img.jpg')" rounded width="160rpx" height="160rpx" />
				</view>
				<view :class="[ useNamespace + '-header__otherinfo' ]">
					<view>
						<view class="num">58</view>
						<view class="type">Articles</view>
					</view>
					<view>
						<view class="num">15.2k</view>
						<view class="type">Popularity</view>
					</view>
					<view>
						<view class="num">104</view>
						<view class="type">Favorites</view>
					</view>
				</view>
				<!-- <view :class="[ useNamespace + '-header__vip' ]">
					<view :class="[ useNamespace + '-header__vip_title' ]">VIP</view>
					<view :class="[ useNamespace + '-header__vip_desc' ]">No member has been opened</view>
					<tino-button color="#3EBDA3" :border="false" @click="vip">To Open</tino-button>
				</view> -->
			</view>
			<!-- 未登录时展示 -->
			<view v-else class="no-login">
				<tino-avatar width="120rpx" height="120rpx" rounded />
				<navigator url="/pages/login/index">SignIn or SignUp</navigator>
			</view>
		</view>
		<tino-menu direction="vertical" item-height="120rpx" :class="[ useNamespace + '-main' ]">
			<tino-menu-item route="/pages/mine/user/index">User profile</tino-menu-item>
			<tino-menu-item route="/pages/mine/cv/index">CV online</tino-menu-item>
			<tino-menu-item route="/pages/mine/article/index">List of articles</tino-menu-item>
			<tino-menu-item route="/pages/mine/operate/index">Operation setup</tino-menu-item>
			<tino-menu-item route="/pages/mine/store/index">My store</tino-menu-item>
			<tino-menu-item :route="logout">Log out</tino-menu-item>
		</tino-menu>
	</LayoutMain>

	<tino-dialog
		title="Update Profile"
		v-model:visable="showUpdateUsername"
		@confirm="updateUsername"
	>
		<tino-input
			v-model="username"
			placeholder="Jaques Tino"
			:rules="[{ required: true, message: 'username is required', trigger: 'blur' }, { min: 6, max: 12, message: 'username is between 6 and 12', trigger: ['blur', 'change'] }]"
		/>
	</tino-dialog>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'
import { useImageFile } from '@/hooks'
import LayoutMain from '@/layout/main/index.vue'

const store = useStore()
const user = ref(null)
const username = ref('')
const showUpdateUsername = ref(false)
const useNamespace = computed(() => store.prefix + '-mine')

// 退出登录
const logout = () => {

}

// 更新用户名
const updateUsername = () => {

}

const vip = () => {
	uni.navigateTo({
		url:"/pages/member/index"
	})
}


</script>

<style lang="scss" scoped>
@import 'index';
</style>