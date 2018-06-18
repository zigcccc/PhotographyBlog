import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from '@/router';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
