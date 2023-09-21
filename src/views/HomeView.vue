<script setup>
</script>

<!-- <div class="area">
  强占 DOM，减少重排，样式出错
  <div class="area-container">
    规划得到的 area
    <div class="item-settings">
      设置总体物品样式
      (various items)
    </div>
  </div>
</div> -->
<template>
  <main>
    <div class="home">
      <h1> >强占 DOM，减少重排，样式出错 </h1>
      <div class="home-container">
        <h2> >规划得到的 area 和 items 的排列方式 </h2>
        <div class="item-settings" style="align-items: center;">
          <h3> >设置总体物品样式 </h3>
          <li> (various items) </li>
          <li> (various items) </li>
          <li> (various items) </li>
          <li> (various items) </li>
          <li> (various items) </li>
          <li> (various items) </li>
          <li> (various items) </li>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .item-settings {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
