import { createApp } from 'vue';
import App from './App.vue';
import vanillaLib from './tab';

import 'ant-design-vue/dist/antd.less';
import Antd from 'ant-design-vue/es';
import * as AntdIcons from '@ant-design/icons-vue';

const run = async () => {

    const app = createApp(App)
        .use(Antd)
        .use(vanillaLib);

    Object.keys(AntdIcons)
        .filter(key => (key.includes('Outlined') || key.includes('Filled') || key.includes('TwoTone')) && (!key.includes('get') && !key.includes('set')))
        .forEach(key => {
            app.component(key, AntdIcons[key]);
        });

    app.mount('#app');
}

run().catch(err => {
    window.alert(err.message);
});
