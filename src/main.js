import { createApp } from 'vue'
import './styles.css'
import './main.scss'
import { router } from './router'
import { scrollAnimate } from './directives/Scrollanimate'
import { createMetaManager } from "vue-meta";
import App from './App.vue'

const app = createApp(App)
app.directive('scrollanimation', scrollAnimate)
app.use(createMetaManager())
app.use(router)
app.mount('#app')
