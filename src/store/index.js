import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

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
		albums: {
			predmeti,
			portreti_studio,
			figure,
			akti,
			hrana,
			portreti_tematski_sklop,
			ljudje_na_ulici,
			poljubne
		}
	},
	actions: {},
	mutations: {},
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
		getSpecificAlbum: state => name => {}
	},
	setters: {}
});

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

export default store;
