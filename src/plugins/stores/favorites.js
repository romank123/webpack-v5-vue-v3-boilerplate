/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favoriteUsers: [],
        favoritePosts: [],
    }),
    getters: {
        isFavoriteUser: (state) => (userId) => !!state.favoriteUsers.find((user) => user.id === userId),
        isFavoritePost: (state) => (postId) => !!state.favoritePosts.find((post) => post.id === postId),
    },
    actions: {
        addFavoriteUser(user) {
            this.favoriteUsers.push(user);
        },
        removeFavoriteUser(userId) {
            this.favoriteUsers = this.favoriteUsers.filter((user) => user.id !== userId);
        },
        addFavoritePost(post) {
            this.favoritePosts.push(post);
        },
        removeFavoritePost(postId) {
            this.favoritePosts = this.favoritePosts.filter((post) => post.id !== postId);
        },
    },
});
