import { createApp } from 'vue'
import './styles.css'
import { router } from './router'
import { scrollAnimate } from './directives/Scrollanimate'
import App from './App.vue'

const app = createApp(App)
app.directive('scrollanimation', scrollAnimate)

app.use(router)
app.mount('#app')
