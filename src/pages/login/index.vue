<template>
  <view :class="[ namespace ]">
    <tino-status-bar color="linear-gradient(117.4deg, #64B9B4 0%, #68CAB1 100%)" />
    <tino-form :modal="user">
      <tino-form-item label="Email Address">
        <tino-input placeholder="jaques.space@qq.com" v-model="user.name" />
      </tino-form-item>
      <tino-form-item label="Password">
        <tino-input placeholder="8+ characters required" v-model="user.email" />
      </tino-form-item>
    </tino-form>
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

const namespace = useNamespace('login')
const user = reactive({
  name: '',
  email: ''
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
