import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '@/views/TheHome.vue';
import TheUsers from '@/views/TheUsers.vue';
import TheSingleUser from '@/views/TheSingleUser.vue';
import ThePosts from '@/views/ThePosts.vue';
import TheSinglePost from '@/views/TheSinglePost.vue';
import TheFavorites from '@/views/TheFavorites.vue';
import ThePageNotFound from '@/views/ThePageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    activeClass: 'asdf',
    routes: [
        { path: '/', component: TheHome },
        { path: '/users', component: TheUsers },
        { path: '/users/:id', component: TheSingleUser },
        { path: '/posts', component: ThePosts },
        { path: '/posts/:id', component: TheSinglePost },
        { path: '/favorites', component: TheFavorites },
        { path: '/:pathMatch(.*)*', component: ThePageNotFound },
    ],
});

export default router;
