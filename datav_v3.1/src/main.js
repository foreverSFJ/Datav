import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.less'
import './assets/main-index.less'
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// eslint-disable-next-line no-unused-vars
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import $api from '@/api/api.js'
import dataV from '@jiaminghi/data-view'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.prototype.$api = $api

Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
