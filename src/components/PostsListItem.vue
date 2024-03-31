<template>
    <li>
        <router-link :to="`/posts/${props.item.id}`">
            {{ props.item.title }}
        </router-link>
        &nbsp;
        <BaseButton @click="visitUrl(`/posts/${props.item.id}`)">
            Read More
        </BaseButton>
        &nbsp;
        <BaseButton @click="deletePost(props.item.id)">
            Delete
        </BaseButton>
        <BtnFavorite
            :item="props.item"
            type="post"
        />
    </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';
import BtnFavorite from '@/components/BtnFavorite.vue';

const emit = defineEmits(['deletePost']);
const props = defineProps({
    item: {
        type: Object,
        default: () => {},
    },
});

const router = useRouter();

function visitUrl(url) {
    router.push(url);
}

function deletePost(postId) {
    emit('deletePost', postId);
}
</script>
