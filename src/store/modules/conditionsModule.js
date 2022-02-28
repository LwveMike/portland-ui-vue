const conditionsModule = {
  state: () => ({
    conditions: null,
  }),
  getters: {
    getConditions(state) {
      return state.conditions;
    },
  },

  mutations: {
    assignConditions(state, payload) {
      state.conditions = payload.conditions;
    },
  },

};

export default conditionsModule;
