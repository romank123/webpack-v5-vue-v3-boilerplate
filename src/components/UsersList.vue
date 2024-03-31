<template>
  <p v-if="isLoading || error">
    {{ isLoading ? 'Loading...' : error }}
  </p>
  <ul v-else-if="users.length">
    <UsersListItem
      v-for="user in users"
      :key="user.id"
      :item="user"
      @delete-user="deleteUser"
    />
  </ul>
  <p v-else>
    No data
  </p>
</template>

<script setup>
import useAxios from '@/use/useAxios';
import UsersListItem from '@/components/UsersListItem.vue';
import { useFavoritesStore } from '@/plugins/stores/favorites';

const { isLoading, data: users, error } = useAxios('https://jsonplaceholder.typicode.com/users');
const store = useFavoritesStore();

function deleteUser(userId) {
  users.value = users.value.filter((user) => user.id !== userId);
  store.removeFavoriteUser(userId);
}
</script>
