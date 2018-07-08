import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import * as firebase from 'firebase';
import { config } from '@/firebase/firebase.config';
import VueAnalytics from 'vue-analytics';
import VueGtm from 'vue-gtm';
import Meta from 'vue-meta';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import PageContainer from '@/components/PageContainer';
import MyButton from '@/components/MyButton';

// export const firebase = Firebase.initializeApp(config);
// export const db = firebase.firestore();
//window.firebase = firebase;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAnalytics, {
	id: 'UA-109301417-2',
	checkDuplicatedScript: true,
	router,
	ignoreRoutes: ['Admin', 'Login']
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
	components: { App },
	created() {
		firebase.initializeApp(config);
	}
});
