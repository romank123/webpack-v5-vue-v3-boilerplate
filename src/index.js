import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/plugins/router/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faUsers, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import '@/sass/index.scss';

library.add(faHouse, faUsers, faStar, faNewspaper);

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
