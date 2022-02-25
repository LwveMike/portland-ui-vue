import Vue from 'vue';
import Vuex from 'vuex';

import productsModule from './modules/productsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsModule,
  },
});
