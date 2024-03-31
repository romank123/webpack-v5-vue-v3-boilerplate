<template>
    <nav class="main-nav">
        <router-link
            to="/"
            class="main-nav__link"
        >
            <font-awesome-icon icon="house" />
            Home
        </router-link>
        <router-link
            to="/users"
            class="main-nav__link"
            :class="{ 'main-nav__link--active': route.path.includes('/users/') }"
        >
            <font-awesome-icon icon="users" />
            Users
        </router-link>
        <router-link
            to="/posts"
            class="main-nav__link"
            :class="{ 'main-nav__link--active': route.path.includes('/posts/') }"
        >
            <font-awesome-icon icon="newspaper" />
            Posts
        </router-link>
        <router-link
            to="/favorites"
            class="main-nav__link"
        >
            <font-awesome-icon icon="star" />
            Favorites
        </router-link>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
.main-nav {
    overflow: hidden;
}
.main-nav__link {
    display: block;
    padding: 10px 14px;
    float: left;
    text-decoration: none;
    color: $black;
    border: 1px solid $mainColor;
    margin-right: 5px;

    svg {
        margin-right: 4px;
    }
    &:hover {
        background-color: $mainColorLight;
    }
}
.router-link-active,
.main-nav__link--active {
    color: $white;
    background-color: $mainColor;

    &:hover {
        background-color: $mainColor;
    }
}
</style>
