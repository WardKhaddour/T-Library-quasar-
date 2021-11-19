export default {
  namespaced: true,
  getters: {
    token(state) {
      const token = localStorage.getItem("token");
      console.log(token + "Token");
      state.token = token;
      return state.token;
    },
  },
  mutations: {
    login(state, token) {
      console.log(token + "token mutation");
      if (state.token != null) {
        localStorage.setItem("token", token);
        return;
      }
      state.token = token;
    },
    setTokenFromLocalStorage(state) {
      const token = localStorage.getItem("token");
      console.log(token + "Token");
      state.token = token;
    },
    logOut(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    saveUser({ commit }, token) {
      console.log(token + "token actions");
      commit("login", token);
    },
    logOut(context) {
      localStorage.removeItem("token");
    },
    checkIfLoggedIn({ commit, state }) {
      commit("setTokenFromLocalStorage");
      return state.token != null;
    },
  },
  state() {
    return {
      token: "",
    };
  },
};
