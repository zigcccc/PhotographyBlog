import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import PageContainer from '@/components/PageContainer';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.component('PageContainer', PageContainer);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
