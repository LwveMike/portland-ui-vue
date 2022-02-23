export default {
  state: () => ({
    current: null,
  }),

  getters: {
    getCurrent(state) {
      return state.current;
    },
  },

  mutations: {
    changeCurrent(state, payload) {
      state.current = payload.current;
    },
  },

};
