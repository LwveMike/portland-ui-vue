export default {
  getIsLogged(state) {
    return state.auth.isLogged;
  },

  getUser(state) {
    return state.auth.user;
  },

  getUserId(state) {
    if (state.auth.user !== null) return state.auth.user.id;

    return -1;
  },
};
