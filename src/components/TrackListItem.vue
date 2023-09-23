<script setup>
import { isNil } from 'lodash'
import { computed, defineProps, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import moment from 'moment'
import useStore from '../stores/store'
import SvgIcon from './SvgIcon.vue'
import ArtistsInLine from '@/components/ArtistsInLine.vue'
import ExplicitSymbol from '@/components/ExplicitSymbol.vue'

const props = defineProps({
  trackProp: Object,
  trackNo: Number,
  highlightPlayingTrack: {
    type: Boolean,
    default: true,
  },
})

const route = useRoute()
const router = useRouter()
const store = useStore()
const hover = ref(false)
const trackStyle = ref({})
const { settings } = storeToRefs(useStore())

// TODO: type?
// TODO:
// const type = computed(() => this.$parent.type)
const type = ref('playlist')
const track = computed(() => {
  return type.value === 'cloudDisk'
    ? props.trackProp.simpleSong
    : props.trackProp
})
// TODO: track?
const playable = computed(() =>
  track.value?.privilege?.pl > 0 || track.value?.playable,
)
const imgUrl = computed(() => {
  const image =
    track.value?.al?.picUrl ??
    track.value?.album?.picUrl ??
    'https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg'
  return `${image  }?param=224y224`
})
const artists = computed(() => {
  const { ar, artists } = track.value
  if (!isNil(ar))
    return ar
  if (!isNil(artists))
    return artists
  return []
})
const album = computed(() =>
  track.value.album || track.value.al || track.value?.simpleSong?.al,
)
const subTitle = computed(() => {
  let tn
  if (
    track.value?.tns?.length > 0 &&
    track.value.name !== track.value.tns[0]
  ) 
    tn = track.value.tns[0]
  
  //优先显示alia
  if (settings.value.subTitleDefault) 
    return track.value?.alia?.length > 0 ? track.value.alia[0] : tn
  else 
    return tn === undefined ? track.value.alia[0] : tn 
})
const isAlbum = computed(() => type.value === 'album')
const isSubTitle = computed(() => {
  return (
    (track.value?.tns?.length > 0 &&
      track.value.name !== track.value.tns[0]) ||
    track.value.alia?.length > 0
  )
})
const isPlaylist = computed(() => type.value === 'playlist')
// TODO:
const isLiked = computed(() =>
  // this.$parent.liked.songs.includes(track.value?.id)
  false,
)
const isPlaying = computed(() => {
  return store.player.player.currentTrack.id === track.value?.id
})
const showUnavailableSongInGreyStyle = computed(() => {
  // return process.env.IS_ELECTRON
  //   ? !this.$store.state.settings.enableUnblockNeteaseMusic
  //   : true;
  return true
})
// TODO:
const isMenuOpened = computed(() =>
  false,
  // this.$parent.rightClickedTrack.id === this.track.id ? true : false
)
const focus = computed(() => {
  return (
    (hover.value
    // && this.$parent.rightClickedTrack.id === 0
    ) ||
    isMenuOpened.value
  )
})
const trackClass = computed(() => {
  const trackClass = [type]
  if (!playable.value && showUnavailableSongInGreyStyle.value)
    trackClass.push('disable')
  if (isPlaying.value && props.highlightPlayingTrack)
    trackClass.push('playing')
  if (focus.value)
    trackClass.push('focus')
  return trackClass
})
const showLikeButton = computed(() =>
  type.value !== 'tracklist' && type.value !== 'cloudDisk',
)
const showOrderNumber = computed(() => type.value === 'album')
const showAlbumName = computed(() =>
  type.value !== 'album' && type.value !== 'tracklist',
)
const showTrackTime = computed(() => type.value !== 'tracklist')
const dtMoment = computed(() => {
  return moment(track.value.dt).format('mm:ss')
})
function goToAlbum() {
  if (track.value.al.id === 0)
    return
  router.push({ path: `/album/${  track.value.al.id}` })
}
// TODO:
function playTrack() {
  // this.$parent.playThisList(this.track.id);
}
function likeThisSong() {
  // this.$parent.likeATrack(this.track.id);
}
</script>

<template>
  <!-- <div 
    class="track" :class="trackClass" :style="trackStyle" 
    :title="showUnavailableSongInGreyStyle ? track.reason : ''"
    @mouseover="hover = true" @mouseleave="hover = false"
  > -->
  <div 
    class="track" :class="trackClass" :style="trackStyle" 
    @mouseover="hover = true" @mouseleave="hover = false"
  >
    <img v-if="!isAlbum" :src="imgUrl" loading="lazy" :class="{ hover: focus }" @click="goToAlbum" />
    <div v-if="showOrderNumber" class="no">
      <button v-show="focus && playable && !isPlaying" @click="playTrack">
        <SvgIcon icon-class="play" style="height: 14px; width: 14px" />
      </button>
      <span v-show="(!focus || !playable) && !isPlaying">{{ trackNo }}</span>
      <button v-show="isPlaying">
        <SvgIcon icon-class="volume" style="height: 16px; width: 16px" />
      </button>
    </div>
    <div class="title-and-artist">
      <div class="container">
        <div class="title">
          {{ track.name }}
          <span v-if="isSubTitle" :title="subTitle" class="sub-title">
            ({{ subTitle }})
          </span>
          <span v-if="isAlbum" class="featured">
            <ArtistsInLine :artists="track.ar" :exclude="$parent.albumObject.artist.name" prefix="-" />
          </span>
          <span v-if="isAlbum && track.mark === 1318912" class="explicit-symbol">
            <ExplicitSymbol />
          </span>
        </div>
        <div v-if="!isAlbum" class="artist">
          <span v-if="track.mark === 1318912" class="explicit-symbol before-artist">
            <ExplicitSymbol :size="15" />
          </span>
          <ArtistsInLine :artists="artists" />
        </div>
      </div>
      <div></div>
    </div>

    <!-- <div v-if="showAlbumName" class="album">
      <router-link v-if="album && album.id" :to="`/album/${album.id}`">{{
        album.name
      }}</router-link>
      <div></div>
    </div> -->

    <!-- <div v-if="showLikeButton" class="actions">
      <button @click="likeThisSong">
        <SvgIcon 
          name="heart" :style="{
            visibility: focus && !isLiked ? 'visible' : 'hidden',
          }" 
        />
        <SvgIcon v-show="isLiked" name="heart-solid" />
      </button>
    </div> -->
    <div v-if="showTrackTime" class="time">
      <!-- {{ track.dt }} -->
      {{ dtMoment }}
    </div>

    <div v-if="track.playCount" class="count"> {{ track.playCount }}</div>
  </div>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: transparent;
  border-radius: 25%;
  transition: transform 0.2s;

  .svg-icon {
    height: 16px;
    width: 16px;
    color: var(--color-primary);
  }

  &:hover {
    transform: scale(1.12);
  }

  &:active {
    transform: scale(0.96);
  }
}

.track {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  user-select: none;

  .no {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 0 20px 0 10px;
    width: 12px;
    color: var(--color-text);
    cursor: default;

    span {
      opacity: 0.58;
    }
  }

  .explicit-symbol {
    opacity: 0.28;
    color: var(--color-text);

    .svg-icon {
      margin-bottom: -3px;
    }
  }

  .explicit-symbol.before-artist {
    .svg-icon {
      margin-bottom: -3px;
    }
  }

  img {
    border-radius: 8px;
    height: 46px;
    width: 46px;
    margin-right: 20px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  img.hover {
    filter: drop-shadow(100 200 0 black);
  }

  .title-and-artist {
    flex: 1;
    display: flex;

    .container {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text);
      cursor: default;
      padding-right: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;

      .featured {
        margin-right: 2px;
        font-weight: 500;
        font-size: 14px;
        opacity: 0.72;
      }

      .sub-title {
        color: #7a7a7a;
        opacity: 0.7;
        margin-left: 4px;
      }
    }

    .artist {
      margin-top: 2px;
      font-size: 13px;
      opacity: 0.68;
      color: var(--color-text);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

      a {
        span {
          margin-right: 3px;
          opacity: 0.8;
        }

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  .album {
    flex: 1;
    display: flex;
    font-size: 16px;
    opacity: 0.88;
    color: var(--color-text);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .time,
  .count {
    font-size: 16px;
    width: 50px;
    cursor: default;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    font-variant-numeric: tabular-nums;
    opacity: 0.88;
    color: var(--color-text);
  }

  .count {
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
  }
}

.track.focus {
  transition: all 0.3s;
  background: var(--color-secondary-bg);
}

.track.disable {
  img {
    filter: grayscale(1) opacity(0.6);
  }

  .title,
  .artist,
  .album,
  .time,
  .no,
  .featured {
    opacity: 0.28 !important;
  }

  &:hover {
    background: none;
  }
}

.track.tracklist {
  img {
    height: 36px;
    width: 36px;
    border-radius: 6px;
    margin-right: 14px;
    cursor: pointer;
  }

  .title {
    font-size: 16px;
  }

  .artist {
    font-size: 12px;
  }
}

.track.album {
  height: 32px;
}

.actions {
  width: 80px;
  display: flex;
  justify-content: flex-end;
}

.track.playing {
  background: var(--color-primary-bg);
  color: var(--color-primary);

  .title,
  .album,
  .time,
  .title-and-artist .sub-title {
    color: var(--color-primary);
  }

  .title .featured,
  .artist,
  .explicit-symbol,
  .count {
    color: var(--color-primary);
    opacity: 0.88;
  }

  .no span {
    color: var(--color-primary);
    opacity: 0.78;
  }
}
</style>
