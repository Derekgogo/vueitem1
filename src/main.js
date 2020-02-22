import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import './common/util/layui/layui.js'
import './common/util/layui/css/layui.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
