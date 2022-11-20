<template>
	<LayoutMain namespace="mine" use-status-bar>
		<view :class="[ useNamespace + '-header' ]">
			<view :class="[ useNamespace + '-header__userinfo' ]">
				<view>
					<view :class="[ useNamespace + '-header__userinfo_name' ]" @click="showUpdateUsername = true">Jaques Tino</view>
					<view>
						<tino-tag suffix-icon="sex-male" color="#7CDAA6">21</tino-tag>
						<text :class="[ useNamespace + '-header__userinfo_id' ]">ID: 828941260</text>
					</view>
				</view>
				<tino-avatar src="../../assets/images/head_img.jpg" rounded width="160rpx" height="160rpx" />
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
			<view :class="[ useNamespace + '-header__vip' ]">
				<view :class="[ useNamespace + '-header__vip_title' ]">VIP</view>
				<view :class="[ useNamespace + '-header__vip_desc' ]">No member has been opened</view>
				<tino-button color="#3EBDA3" :border="false" @click="vip">To Open</tino-button>
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
		<tino-input placeholder="Jaques Tino" v-model="username" />
	</tino-dialog>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'
import LayoutMain from '@/layout/main/index.vue'

const store = useStore()
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