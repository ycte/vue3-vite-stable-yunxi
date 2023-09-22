<script setup>
import { computed, defineProps } from 'vue'
import Cover from './Cover.vue'

// import ExplicitSymbol from "src/components/ExplicitSymbol.vue";

const props = defineProps({
  items: { type: Array, required: true },
  type: { type: String, required: true },
  subText: { type: String, default: 'null' },
  subTextFontSize: { type: String, default: '16px' },
  showPlayCount: { type: Boolean, default: false },
  columnNumber: { type: Number, default: 5 },
  gap: { type: String, default: '44px 24px' },
  playButtonSize: { type: Number, default: 22 },
})

const rowStyles = computed(() => {
  return {
    'grid-template-columns': `repeat(${props.columnNumber}, 1fr)`,
    'gap': props.gap,
  }
})
function getSubText(item) {
  if (props.subText === 'copywriter')
    return item.copywriter
  if (props.subText === 'description')
    return item.description
  if (props.subText === 'updateFrequency')
    return item.updateFrequency
  if (props.subText === 'creator')
    return `by ${item.creator.nickname}`
  if (props.subText === 'releaseYear')
    return new Date(item.publishTime).getFullYear()
  if (props.subText === 'artist') {
    if (item.artist !== undefined)
      return `<a href="/#/artist/${item.artist.id}" style="text-decoration: none;color: black;">${item.artist.name}</a>`
    if (item.artists !== undefined)
      return `<a href="/#/artist/${item.artists[0].id}" style="text-decoration: none;color: black;">${item.artists[0].name}</a>`
  }
  if (props.subText === 'albumType+releaseYear') {
    let albumType = item.type
    if (item.type === 'EP/Single')
      albumType = item.size === 1 ? 'Single' : 'EP'
    else if (item.type === 'Single')
      albumType = 'Single'
    else if (item.type === '专辑')
      albumType = 'Album'

    return `${albumType} · ${new Date(item.publishTime).getFullYear()}`
  }
  if (props.subText === 'appleMusic')
    return 'by Apple Music'
}
function isPrivacy(item) {
  return props.type === 'playlist' && item.privacy === 10
}
function isExplicit(item) {
  return props.type === 'album' && item.mark === 1056768
}
function getTitleLink(item) {
  return `/${props.type}/${item.id}`
}
function getImageUrl(item) {
  if (item.img1v1Url) {
    let img1v1ID = item.img1v1Url.split('/')
    img1v1ID = img1v1ID[img1v1ID.length - 1]
    if (img1v1ID === '5639395138885805.jpg') {
      // 没有头像的歌手，网易云返回的img1v1Url并不是正方形的 😅😅😅
      return 'https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512'
    }
  }
  const img = item.img1v1Url || item.picUrl || item.coverImgUrl
  return `${img?.replace('http://', 'https://')}?param=512y512`
}
</script>

<template>
  <!-- <div
    class="cover-row"
    :style="rowStyles"
  > -->
  <div class="cover-row">
    <RecycleScroller 
      v-slot="{ item, index }" 
      class="scroll" 
      :item-size="165" 
      key-field="id" 
      :items="props.items"
      direction="horizontal"
    >
      <div :key="index">
        <div class="item" :class="{ artist: props.type === 'artist' }">
          <Cover 
            :id="item.id" :image-url="getImageUrl(item)" :type="props.type"
            :play-button-size="props.type === 'artist' ? 26 : props.playButtonSize" 
          />
          <div class="text">
            <div v-if="props.showPlayCount" class="info">
              <span class="play-count">
                <!-- <SvgIcon /> -->
                <!-- {{ item.playCount | formatPlayCount }} -->
                {{ item.playCount }}
              </span>
            </div>
            <div class="title" :style="{ fontSize: props.subTextFontSize }">
              <!-- <span v-if="isExplicit(item)" class="explicit-symbol"
                ><ExplicitSymbol
              /></span>
              <span v-if="isPrivacy(item)" class="lock-icon">
                <svg-icon icon-class="lock"/>
              </span> -->
              <router-link :to="getTitleLink(item)">
                {{ item.name }}
              </router-link>
            </div>
            <div v-if="props.type !== 'artist' && props.subText !== 'none'" class="info">
              <span v-html="getSubText(item)" />
            </div>
          </div>
        </div>
      </div>
    </RecycleScroller>
  </div>
</template>

<style lang="scss" scoped>
.cover-row {
  // display: grid;
  height: 240px;
}

.scroll {
  height: 100%;
  // width: 90%;
}

.item {
  width: 155px;
  color: var(--color-text);
  margin-left: 20px;

  // border-left: 3%;
  .text {
    margin-top: 12px;

    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break: break-all;
    }

    .info {
      font-size: 12px;
      opacity: 0.68;
      line-height: 18px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break: break-word;
    }
  }
}

a {
  /* //去掉下换线 */
  text-decoration: none;

  /* //文字颜色更改 */
  color: black;
}

.router-link-exact-active {
  color: black;
}

.router-link-active {
  color: black;
}

.item.artist {
  display: flex;
  flex-direction: column;
  text-align: center;

  .cover {
    display: flex;
  }

  .title {
    margin-top: 4px;
  }
}

@media (max-width: 335px) {
  .item .text .title {
    font-size: 14px;
  }
}

.explicit-symbol {
  opacity: 0.28;
  color: var(--color-text);
  float: right;

  .svg-icon {
    margin-bottom: -3px;
  }
}

.lock-icon {
  opacity: 0.28;
  color: var(--color-text);
  margin-right: 4px;

  // float: right;
  .svg-icon {
    height: 12px;
    width: 12px;
  }
}

.play-count {
  font-weight: 600;
  opacity: 0.58;
  color: var(--color-text);
  font-size: 12px;

  .svg-icon {
    margin-right: 3px;
    height: 8px;
    width: 8px;
  }
}
</style>
