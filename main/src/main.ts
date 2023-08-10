import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入对应版本的框架
import Wujie from 'wujie-vue3'

createApp(App).use(Wujie).mount('#app')