import { createApp } from 'vue';
import Dev from './serve.vue';

const appInstance = createApp(Dev);
appInstance.mount('#app');
