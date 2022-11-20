<template>
  <view :class="[ namespace ]" v-show="visable">
    <view :class="[ namespace + '__wrapper' ]">
      <view :class="[ namespace + '__wrapper_title' ]">{{ title }}</view>
      <view :class="[ namespace + '__wrapper_content' ]">
        <slot>{{ content }}</slot>
      </view>
      <view :class="[ namespace + '__wrapper_footer' ]">
        <tino-button color="#D9E9E2" @click="emits('cancel', closeDialog)">cancel</tino-button>
        <tino-button color="#3EBDA3" @click="emits('confirm', closeDialog)">confirm</tino-button>
      </view>
    </view>
    <view :class="[ namespace + '__modal' ]" v-show="showModal" @click.stop="closeDialog" />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

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

const emits = defineEmits(['update:visable', 'cancel', 'confirm'])
const namespace = useNamespace('dialog')

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
