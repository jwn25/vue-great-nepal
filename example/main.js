import Vue from 'vue'
import App from './App.vue'

// import VueGreatNepal from './../dist/vue-great-nepal.common'

// Vue.use(VueGreatNepal)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
