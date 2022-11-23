<template>
  <view
    :class="[ namespace ]"
  >
    <tino-status-bar />
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

const namespace = useNamespace('cv')

</script>
