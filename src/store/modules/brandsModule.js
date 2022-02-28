const brandsModule = {
  state: () => ({
    brands: null,
  }),
  getters: {
    getBrands(state) {
      return state.brands;
    },
  },

  mutations: {
    assignBrands(state, payload) {
      state.brands = payload.brands;
    },
  },

};

export default brandsModule;
