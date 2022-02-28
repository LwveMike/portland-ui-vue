// import apiFetchProducts from '../../api';
import { apiFetchResources } from '../../api';

const productsModule = {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },

  mutations: {
    assignProducts(state, payload) {
      state.products = payload.products;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      const res = await apiFetchResources();
      const { products } = res;

      if (products) {
        commit('assignProducts', { products });
        return true;
      }
      return false;
    },
  },
};

export default productsModule;
