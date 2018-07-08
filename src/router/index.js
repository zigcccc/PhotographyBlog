import VueRouter from 'vue-router';
import store from '@/store';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';
import SingleAlbum from '@/pages/SingleAlbum';
import AdminSingleAlbum from '@/pages/AdminSingleAlbum';
import AdminUsers from '@/pages/AdminUsers';
import AdminSettings from '@/pages/AdminSettings';
import AdminAddAlbum from '@/pages/AdminAddAlbum';
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
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/admin',
			name: 'Admin',
			component: Admin,
			children: [
				{
					path: 'users',
					name: 'AdminUsers',
					component: AdminUsers,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'settings',
					name: 'AdminSettings',
					component: AdminSettings,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'album/add-album',
					name: 'AdminAddAlbum',
					component: AdminAddAlbum,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'album/:albumId',
					name: 'AdminSingleAlbum',
					component: AdminSingleAlbum,
					meta: {
						requiresAuth: true
					}
				}
			],
			meta: {
				requiresAuth: true
			}
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
	const currentUser = store.getters.user;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	if (requiresAuth && !currentUser) {
		next('/login');
	} else if (requiresAuth && currentUser) {
		next();
	} else {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 100);
		next();
	}
});

export default router;
