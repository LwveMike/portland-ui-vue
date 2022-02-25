import apiFetchProducts from '../../api';

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
      const products = await apiFetchProducts();

      if (products) {
        commit('assignProducts', { products });
        return true;
      }
      return false;
    },
  },
};

export default productsModule;
