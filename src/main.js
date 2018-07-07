import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseConf from '@/firebase/firebase.config';
import VueAnalytics from 'vue-analytics';
import VueGtm from 'vue-gtm';
import Meta from 'vue-meta';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import PageContainer from '@/components/PageContainer';
import MyButton from '@/components/MyButton';

firebase.initializeApp(firebaseConf);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAnalytics, {
	id: 'UA-109301417-2',
	checkDuplicatedScript: true,
	router
});
Vue.use(VueGtm, {
	enabled: true,
	debug: false,
	vueRouter: router
});
Vue.use(Meta);

Vue.component('PageContainer', PageContainer);
Vue.component('MyButton', MyButton);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
