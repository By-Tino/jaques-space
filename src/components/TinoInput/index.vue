<template>
  <view :class="[ useNamespace ]">
    <view :class="[ useNamespace + '__wrapper', isFocus ? `${useNamespace + '__wrapper'}_focus`: '' ]">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @input="emits('update:modelValue', inputValue)"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'
import { TriggerMethods } from '@/typings'

interface InputProps {
  // 提示性文本
  placeholder?: string
  // 内容
  modelValue?: string | number
  // 表单规则
  rules: TriggerMethods[] | TriggerMethods
}

const store = useStore()
const isFocus = ref(false)
const inputValue = ref('')
const emits = defineEmits(['update:modelValue'])
const useNamespace = computed(() => store.prefix + '-input')

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  modelValue: ''
})

</script>

<style lang="scss" scoped>
@import 'index';
</style>
