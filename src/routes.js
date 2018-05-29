import Stream from './components/Stream.vue';
import Pictures from './components/Pictures.vue';
import Video from './components/Video.vue';

export default [
    {
        path: '/',
        redirect: '/pictures'
    },
    {
        path: '/stream',
        component: Stream
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