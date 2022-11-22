<template>
  <view :class="[ namespace ]">
    <tino-status-bar color="linear-gradient(117.4deg, #64B9B4 0%, #68CAB1 100%)" />
    <tino-form
      ref="userForm"
      :modal="user"
      :rules="userRules"
    >
      <tino-form-item label="Email Address" prop="email">
        <tino-input placeholder="jaques.space@qq.com" v-model="user.email">
          <template #suffix-icon>
            <view>@</view>
          </template>
        </tino-input>
      </tino-form-item>
      <tino-form-item label="Password" prop="password">
        <tino-input
          v-model="user.password"
          show-password
          type="password"
          suffix-icon="password"
          placeholder="8+ characters required"
        />
      </tino-form-item>
      <tino-form-item>
        <tino-button @click="login">click</tino-button>
      </tino-form-item>
    </tino-form>
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'
import { SEND_SMS } from '@/utils'

const namespace = useNamespace('login')

const userForm = ref()

const user = reactive({
  email: '',
  password: ''
})

const userRules = reactive({
  email: [
    {
      required: true,
      message: 'email is required',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 12,
      message: 'The Field "email" must between 6 and 12',
      trigger: ['change', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: 'password is required',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 18,
      message: 'The Field "password" must between 6 and 18',
      trigger: ['change', 'blur']
    }
  ]
})

const login = () => {
  unref(userForm).validator()
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>
