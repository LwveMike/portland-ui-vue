import { apiFetchUserData, apiLoginUser, apiRegisterUser } from '../../api';

const authModule = {
  state: () => ({
    auth: {
      isLogged: false,
      user: null,
    },
  }),
  getters: {
    getIsLogged(state) {
      return state.auth.isLogged;
    },

    getUser(state) {
      return state.auth.user;
    },
  },

  mutations: {
    assignAuth(state, payload) {
      state.auth = {
        isLogged: true,
        user: payload.user,
      };
    },
  },

  actions: {
    async getAuthData({ commit }) {
      const user = await apiFetchUserData();

      if (user) {
        commit('assignAuth', { user });
      } else {
        console.log('hz ceva so intamplat');
      }
    },

    async login({ commit }, userData) {
      const areCredentialsGood = await apiLoginUser(userData);

      if (areCredentialsGood) {
        this.getAuthData({ commit });
      } else {
        console.log('eroare la logare');
      }
    },

    async register({ dispatch }, userData) {
      console.log(userData);
      const registeredSuccessful = await apiRegisterUser(userData);

      if (registeredSuccessful) {
        await dispatch('getAuthData');
      } else {
        console.log('erroare la registrare');
      }
    },
  },
};

export default authModule;
