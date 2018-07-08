import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

import {
	akti,
	figure,
	hrana,
	ljudje_na_ulici,
	poljubne,
	portreti_studio,
	portreti_tematski_sklop,
	predmeti
} from '@/structure/images.json';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		user: null,
		loginError: null,
		loading: false,
		albumUpdateSuccess: false,
		albums: {
			predmeti,
			portreti_studio,
			figure,
			akti,
			hrana,
			portreti_tematski_sklop,
			ljudje_na_ulici,
			poljubne
		},
		siteDescription:
			'Predstavitev fotografskih del v okviru predmeta fotografija2 na Naravoslovno tehnični fakulteti v Ljubljani.'
	},
	actions: {
		updateDescription({ commit }, payload) {
			commit('updateDescription', payload);
		},
		signUserOut({ commit }) {
			firebase
				.auth()
				.signOut()
				.then(() => {
					commit('removeUser');
				});
		},
		signUserIn({ commit }, payload) {
			commit('setLoading', true);
			commit('clearError');
			firebase
				.auth()
				.signInWithEmailAndPassword(payload.email, payload.password)
				.then(user => {
					commit('setLoading', false);
					const newUser = {
						id: user.user.uid,
						email: user.user.email
					};
					commit('setUser', newUser);
				})
				.catch(err => {
					commit('setLoading', false);
					commit('setLoginError', err);
					if (err.code === 'auth/wrong-password') {
						return;
					}
				});
		}
	},
	mutations: {
		updateDescription(state, desc) {
			state.siteDescription = desc;
		},
		setUser(state, payload) {
			state.user = payload;
		},
		removeUser(state) {
			state.user = null;
		},
		setLoading(state, payload) {
			state.loading = payload;
		},
		setLoginError(state, payload) {
			state.loginError = payload;
		},
		clearError(state) {
			state.loginError = null;
		}
	},
	getters: {
		albumsNameAndSlug: state => {
			let output = [];
			for (let album in state.albums) {
				let name = album
					.split('_')
					.join(' ')
					.capitalize();
				let slug = album.split('_').join('-');
				output.push({
					name,
					slug
				});
			}
			return output;
		},
		getSpecificAlbum: state => albumId => {
			for (let album in state.albums) {
				let albumSlug = album.split('_').join('-');
				if (albumSlug === albumId) {
					return state.albums[album];
				}
			}
		},
		getPreviousAlbum: state => albumId => {
			let index = null;
			let albumsArr = Object.keys(state.albums);
			albumsArr.forEach((album, i) => {
				let albumSlug = album.split('_').join('-');
				if (albumSlug === albumId) {
					index = i;
				}
			});
			let prevAlbum = albumsArr[index - 1];
			if (prevAlbum) {
				return {
					albumName: prevAlbum
						.split('_')
						.join(' ')
						.capitalize(),
					albumSlug: prevAlbum.split('_').join('-')
				};
			}
		},
		getNextAlbum: state => albumId => {
			let index = null;
			let albumsArr = Object.keys(state.albums);
			albumsArr.forEach((album, i) => {
				let albumSlug = album.split('_').join('-');
				if (albumSlug === albumId) {
					index = i;
				}
			});
			let nextAlbum = albumsArr[index + 1];
			if (nextAlbum) {
				return {
					albumName: nextAlbum
						.split('_')
						.join(' ')
						.capitalize(),
					albumSlug: nextAlbum.split('_').join('-')
				};
			}
		},
		capitalize: () => str => {
			return str.capitalize();
		},
		user: state => {
			return state.user;
		},
		isLoading: state => {
			return state.loading;
		},
		loginError: state => {
			return state.loginError;
		},
		albumUpdateSuccess: state => {
			return state.albumUpdateSuccess;
		}
	},
	setters: {}
});

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

export default store;
