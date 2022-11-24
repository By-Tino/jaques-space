<template>
	<LayoutMain namespace="home">
		<tino-switch v-model="active" style="margin: 50rpx" />
	</LayoutMain>
</template>

<script lang="ts" setup>

import LayoutMain from '@/layout/main/index.vue'

const active = ref(false)

</script>

<style lang="scss" scoped>
@import 'index';
</style>
