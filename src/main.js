import { createApp } from 'vue'
import App from './App.vue'
import '@/css/normalize.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from '@/index/router'
import '@/css/default.css'
import 'video.js/dist/video-js.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount("#app")