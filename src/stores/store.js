import { defineStore } from "pinia"
import { changeAppearance } from "src/utils/common"
import Player from "src/utils/Player"
import { createPinia } from "pinia"
import { ref, computed } from "vue"
import c from "picocolors"

// actions need
import { isAccountLoggedIn, isLooseLoggedIn } from "src/utils/auth"
// eslint-disable-next-line no-unused-vars
import { likeATrack } from "src/api/track"
import { getPlaylistDetail } from "src/api/playlist"
import { getTrackDetail } from "src/api/track"
import {
  userPlaylist,
  userPlayHistory,
  userLikedSongsIDs,
  likedAlbums,
  likedArtists,
  likedMVs,
  cloudDisk,
  userAccount,
} from "src/api/user"

// state need
import initLocalStorage from "./initLocalStorage"
import pkg from "../../package.json"
import updateApp from "src/utils/updateApp"
if (localStorage.getItem("appVersion") === null) {
  localStorage.setItem("settings", JSON.stringify(initLocalStorage.settings))
  localStorage.setItem("data", JSON.stringify(initLocalStorage.data))
  localStorage.setItem("appVersion", pkg.version)
}
updateApp()
// console.log("> state init complete")

export const useStore = defineStore("store", () => {
  // state
  const showLyrics = ref(false)
  const enableScrolling = ref(true)
  const title = ref("YesPlayMusic")
  const liked = ref({
    songs: [],
    songsWithDetails: [], // 只有前12首
    playlists: [],
    albums: [],
    artists: [],
    mvs: [],
    cloudDisk: [],
    playHistory: {
      weekData: [],
      allData: [],
    },
  })
  const contextMenu = ref({
    clickObjectID: 0,
    showMenu: false,
  })
  const toast = ref({
    show: false,
    text: "",
    timer: null,
  })
  const modals = ref({
    addTrackToPlaylistModal: {
      show: false,
      selectedTrackID: 0,
    },
    newPlaylistModal: {
      show: false,
      afterCreateAddTrackID: 0,
    },
  })
  const dailyTracks = ref([])
  const lastfm = ref(JSON.parse(localStorage.getItem("lastfm")) || {})
  const player = ref(JSON.parse(localStorage.getItem("player")))
  const settings = ref(JSON.parse(localStorage.getItem("settings")))
  const data = ref(JSON.parse(localStorage.getItem("data")))

  // getters
  const getPlayer = computed(() => player)

  // actions
  function updateToast(toast) {
    console.log(c.inverse(c.green("toast")), toast);
    this.toast = toast;
  }
  async function showToast(text) {
    if (this.toast.timer !== null) {
      clearTimeout(this.toast.timer);
      // commit("updateToast", { show: false, text: "", timer: null });

      this.updateToast({ show: false, text: "", timer: null });
    }
    this.updateToast({
      show: true,
      text,
      timer: setTimeout(() => {
        this.updateToast({
          show: false,
          text: this.toast.text,
          timer: null,
        });
      }, 3200),
    });
  }
  function updateLikedXXX({ name, data }) {
    this.liked[name] = data;
    if (name === "songs") {
      this.player.sendSelfToIpcMain();
    }
  }
  function fetchLikedSongsWithDetails() {
    return getPlaylistDetail(this.data.likedSongPlaylistID, true).then(
      (result) => {
        if (result.playlist?.trackIds?.length === 0) {
          return new Promise((resolve) => {
            resolve();
          });
        }
        return getTrackDetail(
          result.playlist.trackIds
            .slice(0, 12)
            .map((t) => t.id)
            .join(",")
        ).then((result) => {
          this.updateLikedXXX({
            name: "songsWithDetails",
            data: result.songs,
          });
        });
      }
    );
  }
  function likeATrack(id) {
    if (!isAccountLoggedIn()) {
      this.showToast("此操作需要登录网易云账号");
      return;
    }
    let like = true;
    if (this.liked.songs.includes(id)) like = false;
    likeATrack({ id, like })
      .then(() => {
        if (like === false) {
          this.updateLikedXXX({
            name: "songs",
            data: this.liked.songs.filter((d) => d !== id),
          });
        } else {
          let newLikeSongs = this.liked.songs;
          newLikeSongs.push(id);
          this.updateLikedXXX({
            name: "songs",
            data: newLikeSongs,
          });
        }
        this.fetchLikedSongsWithDetails();
      })
      .catch(() => {
        this.showToast("操作失败，专辑下架或版权锁定");
      });
  }
  function fetchLikedSongs() {
    if (!isLooseLoggedIn()) return;
    if (isAccountLoggedIn()) {
      return userLikedSongsIDs({ uid: this.data.user.userId }).then(
        (result) => {
          if (result.ids) {
            this.updateLikedXXX({
              name: "songs",
              data: result.ids,
            });
          }
        }
      );
    } else {
      // TODO:搜索ID登录的用户
    }
  }
  function updateData({ key, value }) {
    this.data[key] = value;
  }
  function fetchLikedPlaylist() {
    if (!isLooseLoggedIn()) return;
    if (isAccountLoggedIn()) {
      return userPlaylist({
        uid: this.data.user?.userId,
        limit: 2000, // 最多只加载2000个歌单（等有用户反馈问题再修）
        timestamp: new Date().getTime(),
      }).then((result) => {
        if (result.playlist) {
          this.updateLikedXXX({
            name: "playlists",
            data: result.playlist,
          });
          // 更新用户”喜欢的歌曲“歌单ID
          this.updateData({
            key: "likedSongPlaylistID",
            value: result.playlist[0].id,
          });
        }
      });
    } else {
      // TODO:搜索ID登录的用户
    }
  }
  function fetchLikedAlbums() {
    if (!isAccountLoggedIn()) return;
    return likedAlbums({ limit: 2000 }).then((result) => {
      if (result.data) {
        this.updateLikedXXX({
          name: "albums",
          data: result.data,
        });
      }
    });
  }
  function fetchLikedArtists() {
    if (!isAccountLoggedIn()) return;
    return likedArtists({ limit: 2000 }).then((result) => {
      if (result.data) {
        this.updateLikedXXX({
          name: "artists",
          data: result.data,
        });
      }
    });
  }
  function fetchLikedMVs() {
    if (!isAccountLoggedIn()) return;
    return likedMVs({ limit: 1000 }).then((result) => {
      if (result.data) {
        this.updateLikedXXX({
          name: "mvs",
          data: result.data,
        });
      }
    });
  }
  function fetchCloudDisk() {
    if (!isAccountLoggedIn()) return;
    // FIXME: #1242
    return cloudDisk({ limit: 1000 }).then((result) => {
      if (result.data) {
        this.updateLikedXXX({
          name: "cloudDisk",
          data: result.data,
        });
      }
    });
  }
  function fetchPlayHistory() {
    if (!isAccountLoggedIn()) return;
    return Promise.all([
      userPlayHistory({ uid: this.data.user?.userId, type: 0 }),
      userPlayHistory({ uid: this.data.user?.userId, type: 1 }),
    ]).then((result) => {
      const data = {};
      const dataType = { 0: "allData", 1: "weekData" };
      if (result[0] && result[1]) {
        for (let i = 0; i < result.length; i++) {
          const songData = result[i][dataType[i]].map((item) => {
            const song = item.song;
            song.playCount = item.playCount;
            return song;
          });
          data[[dataType[i]]] = songData;
        }
        this.updateLikedXXX({
          name: "playHistory",
          data: data,
        });
      }
    });
  }
  function fetchUserProfile() {
    if (!isAccountLoggedIn()) return;
    return userAccount().then((result) => {
      if (result.code === 200) {
        this.updateData({ key: "user", value: result.profile });
      }
    });
  }
  function changeLang(lang) {
    this.settings.lang = lang;
  }
  function changeMusicQuality(value) {
    this.settings.musicQuality = value;
  } 
  function changeLyricFontSize(value) {
    this.settings.lyricFontSize = value;
  }
  function changeOutputDevice(deviceId) {
    this.settings.outputDevice = deviceId;
  }
  function updateSettings({ key, value }) {
    this.settings[key] = value;
  }

  function togglePlaylistCategory(name) {
    const index = this.settings.enabledPlaylistCategories.findIndex(
      (c) => c === name
    );
    if (index !== -1) {
      this.settings.enabledPlaylistCategories =
        this.settings.enabledPlaylistCategories.filter((c) => c !== name);
    } else {
      this.settings.enabledPlaylistCategories.push(name);
    }
  }

  function updateModal({ modalName, key, value }) {
    this.modals[modalName][key] = value;
    if (key === "show") {
      // 100ms的延迟是为等待右键菜单blur之后再disableScrolling
      value === true
        ? setTimeout(() => (this.enableScrolling = false), 100)
        : (this.enableScrolling = true);
    }
  }
  function toggleLyrics() {
    this.showLyrics = !this.showLyrics;
  }
  function updateDailyTracks(dailyTracks) {
    this.dailyTracks = dailyTracks;
  }
  function updateLastfm(session) {
    this.lastfm = session;
  }
  function updateShortcut({ id, type, shortcut }) {
    let newShortcut = this.settings.shortcuts.find((s) => s.id === id);
    newShortcut[type] = shortcut;
    this.settings.shortcuts = this.settings.shortcuts.map((s) => {
      if (s.id !== id) return s;
      return newShortcut;
    });
  }
  function restoreDefaultShortcuts() {
    // eslint-disable-next-line no-undef
    this.settings.shortcuts = cloneDeep(shortcuts);
  }
  function enableScroll(status = null) {
    this.enableScrolling = status ? status : !this.enableScrolling;
  }
  function updateTitle(title) {
    this.title = title;
  }
  
  return {
    showLyrics,
    enableScrolling,
    title,
    liked,
    contextMenu,
    toast,
    modals,
    dailyTracks,
    lastfm,
    player,
    settings,
    data,
    getPlayer,
    updateDailyTracks,
    updateLastfm,
    updateShortcut,
    restoreDefaultShortcuts,
    enableScroll,
    updateTitle,
    updateToast,
    toggleLyrics,
    updateModal,
    togglePlaylistCategory,
    updateSettings,
    changeAppearance,
    changeLang,
    changeLyricFontSize,
    changeMusicQuality,
    changeOutputDevice,
    fetchCloudDisk,
    fetchLikedAlbums,
    fetchLikedArtists,
    fetchLikedMVs,
    fetchLikedPlaylist,
    fetchLikedSongs,
    fetchLikedSongsWithDetails,
    fetchPlayHistory,
    fetchUserProfile,
    likeATrack,
    updateData,
    showToast,
    updateLikedXXX,

  }
})

// 旧版本写法
// export const useStore1 = defineStore("store", {

//   state: () => ({
//     ...state,
//     yunxi: {
//       isLogin: () => {
//         true;
//       },
//       isLooseLogin: () => {
//         true;
//       },
//     },
//   }),
//   getters: {
//     getPlayer: (state) => state.player,
//   },
//   actions: {
//     // ...action,
    
//   },
// });

// 如果 pinia 实例无法自动注入，您必须手动将其提供给 useStore() 函数。

const store = useStore(createPinia())
console.log(c.inverse(c.yellow("begin")), ">Store test:",store)

if ([undefined, null].includes(store.settings.lang)) {
  const defaultLang = "en";
  const langMapper = new Map()
    .set("zh", "zh-CN")
    .set("zh-TW", "zh-TW")
    .set("en", "en")
    .set("tr", "tr");
  store.settings.lang =
    langMapper.get(
      langMapper.has(navigator.language)
        ? navigator.language
        : navigator.language.slice(0, 2)
    ) || defaultLang;
  localStorage.setItem("settings", JSON.stringify(store.settings));
}

// changeAppearance(store.settings.appearance);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (store.settings.appearance === "auto") {
      changeAppearance(store.settings.appearance);
    }
  });

let player = new Player();
// console.log(Object.keys(player));
// for (let key in player) {
//   console.log(key[0]);
//   if (key[0] == "_") {
//     console.log(key);
//     player[key.substr(1)] = player[key];
//   }
// }
// console.log(player);
// console.log("localStorage", localStorage.getItem("player"));
player.value = new Proxy(player, {
  // get(target, prop) {
  //   // console.log("proxy", prop, target["_" + prop]);
  //   return target["_" + prop];
  // },
  set(target, prop, val) {
    // console.log("proxy", { prop, val });
    target[prop] = val;

    if (prop === "_howler") return true;
    // console.log("Player preparing to save");
    target.saveSelfToLocalStorage();
    target.sendSelfToIpcMain();
    return true;
  },
});

// console.log(player);
store.$patch({
  player: {
    player: player,
  },
});
// store.player = {
//   player: player,
// };
// console.log(toRaw(store.player));
export default useStore;
