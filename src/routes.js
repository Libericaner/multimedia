import Home from './components/Home.vue';
import Pictures from './components/Pictures.vue';
import Video from './components/Video.vue';

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/pictures',
        component: Pictures
    },
    {
        path: '/video',
        component: Video
    }
];