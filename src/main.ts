import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import i18n from './languages/index.ts';
// 引入组件库的少量全局样式变量
const app = createApp(App)
app.use(i18n)
app.use(TDesign)
app.use(router)
app.mount('#app')
