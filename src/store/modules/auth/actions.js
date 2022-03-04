import {
  apiFetchUserData, apiLoginUser, apiRegisterUser, apiLogout,
} from '../../../api';

export default {
  async assignAuthData({ commit }) {
    const data = await apiFetchUserData();

    if (data.fullfilled) {
      commit('assignAuth', { isLogged: true, user: data.user });
    } else {
      console.log('eroare la returnarea userului authentificat');
    }
  },

  async login({ dispatch }, userData) {
    const data = await apiLoginUser(userData);

    if (data.fullfilled) {
      // commit('assignAuth', { isLogged: true, user: data.user });
      await dispatch('assignAuthData');

      console.log('tipo ok');
    } else {
      console.log('eroare la logare');
    }
  },

  async register({ dispatch }, userData) {
    const registeredSuccessful = await apiRegisterUser(userData);

    if (registeredSuccessful) {
      await dispatch('assignAuthData');
    } else {
      console.log('erroare la registrare');
    }
  },

  async logout({ commit }) {
    try {
      await apiLogout();
      commit('assignAuth', { isLogged: false, user: null });
      console.log('phd ok');
    } catch (error) {
      console.log('nu poti sa te deloghezi');
    }
  },
};
