export default {
  assignAuth(state, payload) {
    state.auth = {
      isLogged: payload.isLogged,
      user: payload.user,
    };
  },
};
