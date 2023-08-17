import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router.js' // router에서 받은 파일들

createApp(App).use(router).mount('#app') // 4) import한 router를 use(router) -> router 사용