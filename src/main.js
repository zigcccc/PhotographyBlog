import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import PageContainer from '@/components/PageContainer';
import MyButton from '@/components/MyButton';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.component('PageContainer', PageContainer);
Vue.component('MyButton', MyButton);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
