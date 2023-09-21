<!-- eslint-disable n/prefer-global/process -->
<!-- eslint-disable no-console -->
<script setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import useStore from './stores/store'
import {
  isAccountLoggedIn as AccountLoggedIn,
  isLooseLoggedIn as LooseLoggedIn,
} from './utils/auth'
import Player from './components/Player.vue'
import NavBarButton from './components/NavBarBelow.vue'

const store = useStore()
const route = useRoute()
const { showLyrics, settings, player, enableScrolling } = storeToRefs(store)
const isAccountLoggedIn = computed(() => AccountLoggedIn)
const isLooseLoggedIn = computed(() => LooseLoggedIn)
const showPlayer = computed(() => {
  // console.log(
  //   "showPlayer",
  //   [
  //     "mv",
  //     "loginUsername",
  //     "login",
  //     "loginAccount",
  //     "lastfmCallback",
  //   ].includes(route.name) === false
  // )
  return (
    ['mv', 'loginUsername', 'login', 'loginAccount', 'lastfmCallback'].includes(
      route.name,
    ) === false
  )
})
const enablePlayer = computed(() => {
  // return (
  //   this.player.player.enabled && route.name !== "lastfmCallback"
  // )
  return true
})
const showNavbar = computed(() => route.name !== 'lastfmCallback')

onMounted(() => {
  // TODO: Vue3 eventListener for vercel deploy
  console.log('>APP onActivated test process:', process.env)
  // console.log('>APP onActivated test player:', player.value.player.playOrPause)
  // console.log('>APP onActivated test isLogin:', isLooseLoggedIn.value, isAccountLoggedIn.value)
  window.addEventListener('keydown', handleKeydown)
  // TODO: fetch data
  // fetchData();
})
function handleKeydown(e) {
  console.log('>handleKeydown', e)
  if (e.code === 'Space') {
    if (e.target.tagName === 'INPUT')
      return false
    if (route.name === 'mv')
      return false
    e.preventDefault()
    player.value.player.playOrPause()
  }
}
function fetchData() {
  // console.log('fetchData')
  if (!isLooseLoggedIn.value)
    return
  console.log('!isLooseLoggedIn:', !isLooseLoggedIn.value)
  store.fetchLikedSongs()
  store.fetchLikedSongs()
  store.fetchLikedSongsWithDetails()
  store.fetchLikedPlaylist()
  if (isAccountLoggedIn.value) {
    store.fetchLikedAlbums()
    store.fetchLikedArtists()
    store.fetchLikedMVs()
    store.fetchCloudDisk()
  }
}
// TODO: handle scroll
// function handleScroll() {
//   this.$refs.scrollbar.handleScroll()
// }
</script>

<template>
  <!-- area for router-view and top-level components -->

  <div id="app">
    <SvgIcon name="logo" width="30px" height="30px" />
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/about">
      About
    </RouterLink>
    <div>
      <RouterView />
    </div>
    <!-- <Player v-if="enablePlayer" v-show="showPlayer" ref="player" /> -->
    <NavBarButton v-show="showNavbar" />
  </div>
</template>

<style scoped>
#root {
  width: 95%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 120px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
a {
  /* //去掉下换线 */
  text-decoration: none;
  margin-right: 5%;
  /* //文字颜色更改 */
  color: black;
}
.router-link-exact-active {
  color: black;
}
.router-link-active {
  color: black;
}
</style>
