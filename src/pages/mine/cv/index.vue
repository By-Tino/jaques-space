<template>
  <view
    :class="[ namespace ]"
  >
    <tino-status-bar color="#000" />
    简历
  </view>
</template>

<script lang="ts" setup>

import { useNamespace } from '@/hooks'

const namespace = useNamespace('cv')

</script>
