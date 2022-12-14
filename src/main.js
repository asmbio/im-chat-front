// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/Home'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LemonIMUI from 'lemon-imui';
import 'lemon-imui/dist/index.css';
Vue.use(ElementUI, { size: 'small' })
Vue.use(LemonIMUI);
//import router from './router'
import store from './store'
Vue.use(store);
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)
Vue.config.productionTip = false
//import '@/permission' // 权限控制

import LemonMessageVoice from "./components/messageType/voice";
import LemonMessageVideo from "./components/messageType/video";
Vue.component(LemonMessageVideo.name, LemonMessageVideo);
Vue.component(LemonMessageVoice.name, LemonMessageVoice);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})