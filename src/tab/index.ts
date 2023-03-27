import 'vue3-vanilla-tab/style.css';
import { TransitionEnum, createVanillaTab } from 'vue3-vanilla-tab';
import Loading from './loading.vue';
import Error from './error.vue';

/**
 * 小生不才我 - 香草标签页插件
 * @author 汐 QQ2974550071
 */
const vanillaTab = createVanillaTab({
    modules: import.meta.glob(['/src/views/**/page-*.vue', '/src/views/**/form-*.vue']),
    animate: TransitionEnum.ZOOM_FADE,
    source: {
        loadingComponent: Loading,
        errorComponent: Error,
        delay: 300
    },
    cache: {
        storage: sessionStorage,
        prefixKey: 'Vanilla_',
        timeout: 604800,
        encryption: {
            enable: false,
            key: '1212121212121212',
            iv: '2121212121212121'
        }
    },
    homeView: (viewTree) => viewTree[0]
});

export default vanillaTab;