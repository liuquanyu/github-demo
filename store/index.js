import Vue from 'vue'
import Vuex from 'vuex'

console.log(Vuex)
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		 ajax_url: 'https://www.hyxylwsfwzx.com/', // 远程地址
		 img_url: 'https://www.hyxylwsfwzx.com/platform/img/img/',
		 img_url2: 'http://192.168.0.186/img/',
		 openid: '' 
	},
    mutations: {},
    actions: {}
})
export default store