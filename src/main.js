import Vue from 'vue'
import './plugins/axios'
import AsyncComputed from 'vue-async-computed'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(AsyncComputed)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
