import Vue from 'vue'
import Vuex from 'vuex'
import App from './index'
import store from '../../store'

Vue.use(Vuex)

const app = new Vue({
  store,
  ...App
})
app.$mount()
