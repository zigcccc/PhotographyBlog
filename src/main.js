import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import VueFire from 'vuefire';
import VueAnalytics from 'vue-analytics';
import VueGtm from 'vue-gtm';
import Meta from 'vue-meta';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import PageContainer from '@/components/PageContainer';
import MyButton from '@/components/MyButton';

firebase.initializeApp({
	apiKey: 'AIzaSyAZgrH7-W4CQ9l5ZaL8WhTJSwFv9LA-5Gg',
	authDomain: 'photography-blog-da38d.firebaseapp.com',
	databaseURL: 'https://photography-blog-da38d.firebaseio.com',
	projectId: 'photography-blog-da38d',
	storageBucket: 'photography-blog-da38d.appspot.com',
	messagingSenderId: '104541265507'
});
export const db = firebase.firestore();
export const firebaseApp = firebase;
Vue.use(VueFire);

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
