import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/site.css'
import './assets/scss/site.scss'
import './assets/css/fonts/fonts.css'
import './assets/css/fonts/google-fonts.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
