<template>
    <div class="single-post">
        <p v-if="isLoading || error.length">
            {{ isLoading ? 'Loading...' : error }}
        </p>
        <div v-else-if="Object.keys(data).length">
            <div class="single-post__header">
                <BtnFavorite
                    :item="data"
                    type="post"
                />
                <h1>{{ data.title }}</h1>
            </div>
            <div class="single-post__body">
                <p>{{ data.body }}</p>
            </div>
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
const link = ref(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
const { isLoading, data, error } = useAxios(link);

watchEffect(() => {
    link.value = `https://jsonplaceholder.typicode.com/posts/${route.params.id}`;
});
</script>

<style lang="scss">
.single-post__header {
    display: flex;
    align-items: center;

    .btn-favorite {
        margin-right: 6px;
    }
}
</style>
