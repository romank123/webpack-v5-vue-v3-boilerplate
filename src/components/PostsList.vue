<template>
    <p v-if="isLoading || error">
        {{ isLoading ? 'Loading...' : error }}
    </p>
    <ul v-else-if="posts.length">
        <PostsListItem
            v-for="post in posts"
            :key="post.id"
            :item="post"
            @delete-post="deletePost"
        />
    </ul>
    <p v-else>
        No data
    </p>
</template>

<script setup>
import useAxios from '@/use/useAxios';
import PostsListItem from '@/components/PostsListItem.vue';
import { useFavoritesStore } from '@/plugins/stores/favorites';

const { isLoading, data: posts, error } = useAxios('https://jsonplaceholder.typicode.com/posts');
const store = useFavoritesStore();

function deletePost(postId) {
    posts.value = posts.value.filter((post) => post.id !== postId);
    store.removeFavoritePost(postId);
}
</script>
