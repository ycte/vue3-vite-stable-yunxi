<script setup>
import TopTitle from 'src/components/TopTitle.vue'
import { toplists } from 'src/api/playlist'
import { toplistOfArtists } from 'src/api/artist'
import { newAlbums } from 'src/api/album'
import { getRecommendPlayList } from 'src/utils/playList'
import NProgress from 'nprogress'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import CoverRow from 'src/components/CoverRow.vue'
import useStore from '../stores/store.js'

// import FMCard from "src/components/FMCard.vue";
// import { mapState } from "vuex";
// import { byAppleMusic } from "src/utils/staticData";
// import DailyTracksCard from "src/components/DailyTracksCard.vue";

const show = ref(false)
const recommendPlaylist = ref({ items: [] })
const newReleasesAlbum = ref({ items: [] })
const topList = ref({ items: [], ids: [19723756, 180106, 60198, 3812895, 60131] })
const recommendArtists = ref({ items: [], indexs: [] })
const { settings } = storeToRefs(useStore())

onMounted(() => {
  loadData()
})

async function loadData() {
  setTimeout(() => {
    if (!show.value)
      NProgress.start()
  }, 1000)
  getRecommendPlayList(10, false).then((items) => {
    recommendPlaylist.value.items = items
    NProgress.done()
    show.value = true
  })
  newAlbums({
    area: settings.value.musicLanguage ?? 'ALL',
    limit: 10,
  }).then((data) => {
    newReleasesAlbum.value.items = data.albums
  })

  const toplistOfArtistsAreaTable = {
    all: null,
    zh: 1,
    ea: 2,
    jp: 4,
    kr: 3,
  }
  toplistOfArtists(
    toplistOfArtistsAreaTable[settings.value.musicLanguage ?? 'all'],
  ).then((data) => {
    const indexs = []
    while (indexs.length < 6) {
      const tmp = ~~(Math.random() * 100)
      if (!indexs.includes(tmp))
        indexs.push(tmp)
    }
    recommendArtists.value.indexs = indexs
    recommendArtists.value.items = data.list.artists.filter((l, index) =>
      indexs.includes(index),
    )
  })
  toplists().then((data) => {
    topList.value.items = data.list.filter(l =>
      topList.value.ids.includes(l.id),
    )
  })
  // this.$refs.DailyTracksCard.loadDailyTracks();
}
</script>

<template>
  <TopTitle />
  <div v-show="show" class="home">
    <!-- <div
      v-if="settings.showPlaylistsByAppleMusic !== false"
      class="index-row first-row"
    >
      <div class="title"> by Apple Music </div>
      <CoverRow
        :type="'playlist'"
        :items="byAppleMusic"
        sub-text="appleMusic"
        :image-size="1024"
      />
    </div> -->

    <div class="index-row">
      <div class="title">
        {{ $t("home.recommendPlaylist") }}
        <router-link to="/explore?category=推荐歌单">
          {{ $t("home.seeMore") }}
          <!-- 推荐歌单 -->
        </router-link>
      </div>
      <!-- <CoverRow
        :type="'playlist'"
        :items="recommendPlaylist.items"
        sub-text="copywriter"
      /> -->
    </div>
    <!-- <div class="index-row">
      <div class="title"> For You </div>
      <div class="for-you-row">
        <DailyTracksCard ref="DailyTracksCard" />
        <FMCard />
      </div>
    </div> -->
    <div class="index-row">
      <div class="title">{{ $t("home.recommendArtist") }}</div>
      <CoverRow type="artist" :column-number="6" :items="recommendArtists.items" />
    </div>
    <div class="index-row">
      <div class="title">
        {{ $t("home.newAlbum") }}
        <router-link to="/new-album">{{ $t("home.seeMore") }}</router-link>
      </div>
      <CoverRow type="album" :items="newReleasesAlbum.items" sub-text="artist" />
    </div>
    <div class="index-row">
      <div class="title">
        {{ $t("home.charts") }}
        <router-link to="/explore?category=排行榜">
          {{ $t("home.seeMore") }}
        </router-link>
      </div>
      <CoverRow type="playlist" :items="topList.items" sub-text="updateFrequency" :image-size="1024" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .home {
//   overflow: hidden;
// }
.index-row {
  margin-top: 34px;
  // margin-right: 5%;
}

.index-row.first-row {
  margin-top: 32px;
}

.playlists {
  display: flex;
  flex-wrap: wrap;

  margin: {
    right: -12px;
    left: -12px;
  }

  .index-playlist {
    margin: 12px 12px 24px 12px;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);

  a {
    font-size: 13px;
    font-weight: 600;
    opacity: 0.68;
    margin-right: 5%;
  }
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

footer {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.for-you-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 78px;
}
</style>
