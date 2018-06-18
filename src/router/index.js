import VueRouter from 'vue-router';

import Home from '@/pages/Home';
import SinglePhoto from '@/pages/SinglePhoto';
import NotFound from '@/pages/NotFound';

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/photos/:id',
			name: 'SinglePhoto',
			component: SinglePhoto
		},
		{
			path: '/page-not-found',
			component: NotFound
		},
		{
			path: '*',
			redirect: '/page-not-found'
		}
	]
});
