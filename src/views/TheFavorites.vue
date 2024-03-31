<template>
  <h1>Favorites</h1>
  <h2>Favorite Users</h2>
  <ul v-if="store.favoriteUsers.length">
    <li
      v-for="user in store.favoriteUsers"
      :key="user.id"
    >
      <router-link :to="`/users/${user.id}`">
        {{ user.name }}
      </router-link>
      <BtnFavorite
        :item="user"
        type="user"
      />
    </li>
  </ul>
  <p v-else>
    No favorite Users
  </p>
  <h2>Favorite Posts</h2>
  <ul v-if="store.favoritePosts.length">
    <li
      v-for="post in store.favoritePosts"
      :key="post.id"
    >
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
      <BtnFavorite
        :item="post"
        type="post"
      />
    </li>
  </ul>
  <p v-else>
    No favorite Posts
  </p>
</template>

<script setup>
import { useFavoritesStore } from '@/plugins/stores/favorites';
import BtnFavorite from '@/components/BtnFavorite.vue';

const store = useFavoritesStore();
</script>
