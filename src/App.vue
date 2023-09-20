<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useStore from './stores/store'
const store = useStore()
console.debug(store)

</script>

<template>
  <!-- area for router-view and top-level components -->


  
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <div>
    <RouterView></RouterView>
  </div>
  
</template>

<style scoped>
</style>
