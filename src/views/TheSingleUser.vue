<template>
  <div class="single-user">
    <p v-if="isLoading || error.length">
      {{ isLoading ? 'Loading...' : error }}
    </p>
    <div v-else-if="Object.keys(data).length">
      <div class="single-user__header">
        <BtnFavorite
          :item="data"
          type="user"
        />
        <h1>{{ data.name }}</h1>
      </div>
      <ul class="single-user__body">
        <li><i>Name:</i> <b>{{ data.name }}</b></li>
        <li><i>Username:</i> <b>{{ data.username }}</b></li>
        <li><i>Email:</i> <b>{{ data.email }}</b></li>
        <li><i>Phone:</i> <b>{{ data.phone }}</b></li>
        <li><i>Website:</i> <b>{{ data.website }}</b></li>
      </ul>
    </div>
    <p v-else>
      No data
    </p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import useAxios from '@/use/useAxios';
import BtnFavorite from '@/components/BtnFavorite.vue';

const route = useRoute();
const link = ref(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
const { isLoading, data, error } = useAxios(link);

watchEffect(() => {
  link.value = `https://jsonplaceholder.typicode.com/users/${route.params.id}`;
});
</script>

<style lang="scss">
.single-user__header {
  display: flex;
  align-items: center;

  .btn-favorite {
    margin-right: 6px;
  }
}
</style>
