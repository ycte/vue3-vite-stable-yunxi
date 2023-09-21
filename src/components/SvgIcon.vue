<!-- svg 全局组件封裝 -->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  className: {
    type: String,
    default: 'svg-icon',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
const svgClass = computed(() => props.className)
</script>
 
<template>
  <div>
    <svg :style="{ width, height }" aria-hidden="true" :class="svgClass">
      <use :xlink:href="prefix + name" :fill="color" />
    </svg>
  </div>
</template>

<style scoped>
.svg-icon {
  fill: currentColor;
}
</style>
