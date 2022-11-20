<template>
  <view :class="[ useNamespace ]" v-show="visable">
    <view :class="[ useNamespace + '__wrapper' ]">
      <view :class="[ useNamespace + '__wrapper_title' ]">{{ title }}</view>
      <view :class="[ useNamespace + '__wrapper_content' ]">
        <slot>{{ content }}</slot>
      </view>
      <view :class="[ useNamespace + '__wrapper_footer' ]">
        <tino-button color="#D9E9E2" @click="emits('cancel', closeDialog)">cancel</tino-button>
        <tino-button color="#3EBDA3" @click="emits('confirm', closeDialog)">confirm</tino-button>
      </view>
    </view>
    <view :class="[ useNamespace + '__modal' ]" v-show="showModal" @click.stop="closeDialog" />
  </view>
</template>

<script lang="ts" setup>

import { useStore } from '@/pinia/config'

interface DialogProps {
  // 是否显示 dialog
  visable?: boolean
  // dialog 的标题
  title?: string
  // dialog 的内容
  content?: string
  // 是否显示遮罩层
  showModal?: boolean
  // dialog 关闭之前的钩子
  beforeClose?: () => boolean | void
  // dialog 关闭之后的钩子
  afterClose?: () => void
}

const store = useStore()
const emits = defineEmits(['update:visable', 'cancel', 'confirm'])
const useNamespace = computed(() => store.prefix + '-dialog')

const props = withDefaults(defineProps<DialogProps>(), {
  visable: true,
  title: '',
  content: '',
  showModal: true,
  beforeClose: () => () => true,
  afterClose: () => () => undefined
})

const closeDialog = () => {
  const showDialog = props.beforeClose?.()
  emits('update:visable', !showDialog)
  props.afterClose?.()
}

</script>

<style lang="scss" scoped>
@import 'index';
</style>
