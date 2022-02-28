const hotModule = {
  state: () => ({
    hot: [],
  }),
  getters: {
    getHot(state) {
      return state.hot;
    },
  },

  mutations: {
    assignHot(state, payload) {
      state.hot = payload.hot;
    },
  },
};

export default hotModule;
