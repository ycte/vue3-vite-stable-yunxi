// TODO: 高亮当前播放

<script setup>
import { storeToRefs } from 'pinia'
import { computed, defineProps, onMounted, ref } from 'vue'
import { addOrRemoveTrackFromPlaylist } from 'src/api/playlist'
import { cloudDiskTrackDelete } from 'src/api/user'
import { isAccountLoggedIn } from 'src/utils/auth'
import useStore from 'src/stores/store'
import TrackListItem from 'src/components/TrackListItem.vue'
import locale from 'src/locale'

// TODO: will do?
import ContextMenu from 'src/components/ContextMenu.vue'

const props = defineProps({
  tracks: {
    type: Array,
    default: () => {
      return []
    },
  },
  type: {
    type: String,
    default: 'tracklist',
  }, // tracklist | album | playlist | cloudDisk
  id: {
    type: Number,
    default: 0,
  },
  dbclickTrackFunc: {
    type: String,
    default: 'default',
  },
  albumObject: {
    type: Object,
    default: () => {
      return {
        artist: {
          name: '',
        },
      }
    },
  },
  extraContextMenuItem: {
    type: Array,
    default: () => {
      return [
        // 'removeTrackFromPlaylist'
        // 'removeTrackFromQueue'
        // 'removeTrackFromCloudDisk'
      ]
    },
  },
  columnNumber: {
    type: Number,
    default: 4,
  },
  highlightPlayingTrack: {
    type: Boolean,
    default: true,
  },
  itemKey: {
    type: String,
    default: 'id',
  },
})

const rightClickedTrack = ref({
  id: 0,
  name: '',
  ar: [{ name: '' }],
  al: { picUrl: '' },
})
const rightClickedTrackIndex = ref(-1)
const listStyles = ref({})

const { liked, player } = storeToRefs(useStore())
const isRightClickedTrackLiked = computed(() =>
  liked.value.songs.includes(rightClickedTrack.value?.id),
)
const rightClickedTrackComputed = computed(() => {
  return props.type === 'cloudDisk'
    ? {
        id: 0,
        name: '',
        ar: [{ name: '' }],
        al: { picUrl: '' },
      }
    : rightClickedTrack.value
})
onMounted(() => {
  if (props.type === 'tracklist') {
    listStyles.value = {
      display: 'grid',
      gap: '4px',
      gridTemplateColumns: `repeat(${props.columnNumber}, 1fr)`,
    }
  }
})

const store = useStore()
const updateModal = store.updateModal
const nextTrack = store.nextTrack
const showToast = store.showToast
const likeATrack = store.likeATrack

// TODO: openMenu
function openMenu(e, track, index = -1) {
  rightClickedTrack.value = track
  rightClickedTrackIndex.value = index
  // openMenu(e)
  // this.$refs.menu.openMenu(e);
}
function closeMenu() {
  rightClickedTrack.value = {
    id: 0,
    name: '',
    ar: [{ name: '' }],
    al: { picUrl: '' },
  }
  rightClickedTrackIndex.value = -1
}
// Key function
function playThisList(trackID) {
  if (props.dbclickTrackFunc === 'default') {
    playThisListDefault(trackID)
  }
  else if (props.dbclickTrackFunc === 'none') {
    // do nothing
  }
  else if (props.dbclickTrackFunc === 'playTrackOnListByID') {
    player.value.player.playTrackOnListByID(trackID)
  }
  else if (props.dbclickTrackFunc === 'playPlaylistByID') {
    player.value.player.playPlaylistByID(props.id, trackID)
  }
  else if (props.dbclickTrackFunc === 'playAList') {
    const trackIDs = props.tracks.map(t => t.id || t.songId)
    player.value.player.replacePlaylist(trackIDs, props.id, 'artist', trackID)
  }
  else if (props.dbclickTrackFunc === 'dailyTracks') {
    const trackIDs = props.tracks.map(t => t.id)
    player.value.player.replacePlaylist(trackIDs, '/daily/songs', 'url', trackID)
  }
  else if (props.dbclickTrackFunc === 'playCloudDisk') {
    const trackIDs = props.tracks.map(t => t.id || t.songId)
    player.value.player.replacePlaylist(trackIDs, props.id, 'cloudDisk', trackID)
  }
}
function playThisListDefault(trackID) {
  if (props.type === 'playlist') {
    player.value.player.playPlaylistByID(props.id, trackID)
  }
  else if (props.type === 'album') {
    player.value.player.playAlbumByID(player.id, trackID)
  }
  else if (props.type === 'tracklist') {
    const trackIDs = props.tracks.map(t => t.id)
    player.value.player.replacePlaylist(trackIDs, props.id, 'artist', trackID)
  }
}
function play() {
  player.value.player.addTrackToPlayNext(rightClickedTrack.value.id, true)
}
function addToQueue() {
  player.value.player.addTrackToPlayNext(rightClickedTrack.value.id)
}
function like() {
  likeATrack(rightClickedTrack.value.id)
}
function addTrackToPlaylist() {
  if (!isAccountLoggedIn()) {
    showToast(locale.t('toast.needToLogin'))
    return
  }
  updateModal({
    modalName: 'addTrackToPlaylistModal',
    key: 'show',
    value: true,
  })
  updateModal({
    modalName: 'addTrackToPlaylistModal',
    key: 'selectedTrackID',
    value: rightClickedTrack.value.id,
  })
}
// TODO: this.$parent.removeTrack(trackID);
function removeTrackFromPlaylist() {
  if (!isAccountLoggedIn()) {
    showToast(locale.t('toast.needToLogin'))
    return
  }
  if (confirm(`确定要从歌单删除 ${rightClickedTrack.value.name}？`)) {
    const trackID = rightClickedTrack.value.id
    addOrRemoveTrackFromPlaylist({
      op: 'del',
      pid: props.id,
      tracks: trackID,
    }).then((data) => {
      showToast(
        data.body.code === 200
          ? locale.t('toast.removedFromPlaylist')
          : data.body.message,
      )
      // this.$parent.removeTrack(trackID);
    })
  }
}
// TODO: 
function copyLink() {
  console.log('>copyLink:',
    `https://music.163.com/song?id=${rightClickedTrack.value.id}`, '还在做')
  // this.$copyText(
  //   `https://music.163.com/song?id=${rightClickedTrack.value.id}`,
  // )
  //   .then(() => {
  //     showToast(locale.t('toast.copied'))
  //   })
  //   .catch((err) => {
  //     showToast(`${locale.t('toast.copyFailed')}${err}`)
  //   })
}
function removeTrackFromQueue() {
  store.player.player.removeTrackFromQueue(
    rightClickedTrackIndex.value,
  )
}
function removeTrackFromCloudDisk() {
  if (confirm(`确定要从云盘删除 ${rightClickedTrack.value.songName}？`)) {
    const trackID = rightClickedTrack.value.songId
    cloudDiskTrackDelete(trackID).then((data) => {
      showToast(
        data.code === 200 ? '已将此歌曲从云盘删除' : data.message,
      )
      const newCloudDisk = liked.value.cloudDisk.filter(
        t => t.songId !== trackID,
      )
      store.updateLikedXXX({
        name: 'cloudDisk',
        data: newCloudDisk,
      })
    })
  }
}
</script>

<template>
  <div class="track-list">
    <!-- <p>track-list</p> -->
    <!-- <ContextMenu ref="menu">
      <div v-show="type !== 'cloudDisk'" class="item-info">
        <img :src="rightClickedTrackComputed.al.picUrl" loading="lazy" />
        <div class="info">
          <div class="title">{{ rightClickedTrackComputed.name }}</div>
          <div class="subtitle">{{ rightClickedTrackComputed.ar[0].name }}</div>
        </div>
      </div>
      <hr v-show="type !== 'cloudDisk'" />
      <div class="item" @click="play">{{ $t("contextMenu.play") }}</div>
      <div class="item" @click="addToQueue">
        {{ $t("contextMenu.addToQueue") }}
      </div>
      <div v-if="extraContextMenuItem.includes('removeTrackFromQueue')" class="item" @click="removeTrackFromQueue">
        从队列删除
      </div>
      <hr v-show="type !== 'cloudDisk'" />
      <div v-show="!isRightClickedTrackLiked && type !== 'cloudDisk'" class="item" @click="like">
        {{ $t("contextMenu.saveToMyLikedSongs") }}
      </div>
      <div v-show="isRightClickedTrackLiked && type !== 'cloudDisk'" class="item" @click="like">
        {{ $t("contextMenu.removeFromMyLikedSongs") }}
      </div>
      <div v-if="extraContextMenuItem.includes('removeTrackFromPlaylist')" class="item" @click="removeTrackFromPlaylist">
        从歌单中删除
      </div>
      <div v-show="type !== 'cloudDisk'" class="item" @click="addTrackToPlaylist">
        {{ $t("contextMenu.addToPlaylist") }}
      </div>
      <div v-show="type !== 'cloudDisk'" class="item" @click="copyLink">
        {{ $t("contextMenu.copyUrl") }}
      </div>
      <div v-if="extraContextMenuItem.includes('removeTrackFromCloudDisk')" class="item"
        @click="removeTrackFromCloudDisk">
        从云盘中删除
      </div>
    </ContextMenu> -->

    <div :style="listStyles">
      <TrackListItem 
        v-for="(track, index) in tracks" 
        :key="itemKey === 'id' ? track.id : `${track.id}${index}`"
        :track-prop="track" :track-no="index + 1" 
        :highlight-playing-track="highlightPlayingTrack"
        @click="playThisList(track.id || track.songId)" 
        @click.right="openMenu($event, track, index)" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
