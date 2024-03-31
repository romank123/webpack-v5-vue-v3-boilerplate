<!-- eslint-disable max-len -->
<template>
    <BaseButton
        class="btn-favorite"
        :class="{
            'btn-favorite--active':
                props.type === 'user' ? store.isFavoriteUser(props.item.id) : store.isFavoritePost(props.item.id),
        }"
        @click="toggleFavorite(props.item.id)"
    >
        <font-awesome-icon
            icon="star"
            class="btn-favorite--icon"
        />
    </BaseButton>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { useFavoritesStore } from '@/plugins/stores/favorites';

const props = defineProps({
    item: {
        type: Object,
        default: () => {},
    },
    type: {
        type: String,
        default: '',
        validator(val) {
            return ['user', 'post'].includes(val);
        },
    },
});

const store = useFavoritesStore();

function toggleFavorite(itemId) {
    if (props.type === 'user') {
        if (store.isFavoriteUser(itemId)) {
            store.removeFavoriteUser(itemId);
        } else {
            store.addFavoriteUser(props.item);
        }
    } else if (props.type === 'post') {
        if (store.isFavoritePost(itemId)) {
            store.removeFavoritePost(itemId);
        } else {
            store.addFavoritePost(props.item);
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-favorite {
    color: $mainColor;
    background-color: transparent;
    border: none;

    &:hover {
        color: $red;
    }
}
.btn-favorite--active {
    color: $red;
}
</style>
