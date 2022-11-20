<template>
  <view :class="[ useNamespace ]">
    <view :class="[ useNamespace + '__wrapper' ]">
      <input type="text" :placeholder="placeholder" />
    </view>
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

interface InputProps {
  placeholder?: string
}

const store = useStore()
const useNamespace = computed(() => store.prefix + '-input')

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: ''
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
