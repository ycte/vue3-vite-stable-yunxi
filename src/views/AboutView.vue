<script setup>
// // 使用axios获取github用户ycte的个人信息
// import axios from 'axios'
// import { ref } from 'vue'

// const url = ref('https://api.github.com/users/ycte')
// axios.get(url).then((response) => {
//   console.log(response.data)
// })
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
