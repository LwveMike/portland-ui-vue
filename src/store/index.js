import Vue from 'vue';
import Vuex from 'vuex';

import productsModule from './modules/productsModule';
import brandsModule from './modules/brandsModule';
import conditionsModule from './modules/conditionsModule';
import hotModule from './modules/hotModule';
import { apiFetchResources } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchResources({ commit }) {
      const res = await apiFetchResources();
      const { products } = res;
      const { brands } = res;
      const { conditions } = res;

      const only11Products = products.slice(0, 11);
      const hot = products.filter((element) => element.hot === true);

      if (res) {
        commit('assignProducts', { products: only11Products });
        commit('assignBrands', { brands });
        commit('assignConditions', { conditions });
        commit('assignHot', { hot });
        return true;
      }
      return false;
    },
  },
  modules: {
    productsModule,
    brandsModule,
    conditionsModule,
    hotModule,
  },
});
