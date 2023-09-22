import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 三个主页面
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/LibraryView.vue'),
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue'),
    },
    // 附加页面
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: () => import('../views/PlaylistView.vue'),
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('../views/AlbumView.vue'),
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: () => import('../views/ArtistView.vue'),
      meta: {
        keepAlive: true,
        savePosition: true,
      },
    },
    {
      path: '/arrtist/:id/mv',
      name: 'artistMV',
      component: () => import('../views/ArtistMVView.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/mv/:id',
      name: 'mv',
      component: () => import('../views/MVView.vue'),
    },
    {
      path: '/next',
      name: 'next',
      component: () => import('../views/NextView.vue'),
      meta: {
        keepAlive: true,
        savePosition: true,
      },
    },
    {
      path: '/search/:keywords?',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: {
        keepAlive: true,
        savePosition: true,
      },
    },
    {
      path: '/search/:keywords/:type?',
      name: 'searchType',
      component: () => import('../views/SearchTypeView.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/new-album',
      name: 'newAlbum',
      component: () => import('../views/NewAlbumView.vue'),
    },
  
    {
      path: '/library/liked-songs',
      name: 'likedSongs',
      component: () => import('../views/PlaylistView.vue'),
      meta: {
        requireLogin: true,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/daily/songs',
      name: 'dailySongs',
      component: () => import('../views/DailyTracksView.vue'),
      meta: {
        requireAccountLogin: true,
      },
    },
    {
      path: '/lastfm/callback',
      name: 'lastfmCallback',
      component: () => import('../views/LastfmCallbackView.vue'),
    },
    // login
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/login/username',
      name: 'loginUsername',
      component: () => import('../views/LoginUsernameView.vue'),
    },
    {
      path: '/login/account',
      name: 'loginAccount',
      component: () => import('../views/LoginAccountView.vue'),
    },
  ],
})

export default router
