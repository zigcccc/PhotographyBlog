import VueRouter from 'vue-router';

import Home from '@/pages/Home';
import SingleAlbum from '@/pages/SingleAlbum';
import NotFound from '@/pages/NotFound';

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/:albumId',
			name: 'SingleAlbum',
			component: SingleAlbum
		},
		{
			path: '/page-not-found',
			name: 'NotFound',
			component: NotFound
		},
		{
			path: '*',
			redirect: '/page-not-found'
		}
	]
});

router.beforeEach(function(to, from, next) {
	setTimeout(() => {
		window.scrollTo(0, 0);
	}, 100);
	next();
});

export default router;
