import { setCookie, deleteCookie } from "~/lib/cookie-helpers";

export const state = () => ({
  loggedIn: false,
  user: null,
  loading: false,
});

export const mutations = {
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
  setUser(state, user) {
    state.user = user;
  },
  setLoading(state, value) {
    state.loading = value
  }
};

export const getters = {
  user(state) {
    return state.user;
  },
  loggedIn(state) {
    return state.loggedIn
  },
  loading(state) {
    return state.loading
  }
};

export const actions = {
  login({ commit }, { email, password }) {
    return this.$axios.post('/auth/login', {email, password})
      .then(res => {
        const {accessToken} = res.data
        const user = res.data
        delete user.accessToken
        commit('setLoggedIn', true)
        commit('setUser', user);
        setCookie('access-token', accessToken);

        this.$axios.setToken(accessToken, "Bearer");
        console.log('token set', accessToken)
        return user
      })
  },
  signup({commit}, {email, password}) {
    return this.$axios.post('/users', {email, password})
      .then(res => {
        return res.data
      })
  },
  logout({ commit }) {
    commit("setUser", null);
    deleteCookie("access-token");

    this.$axios.setToken(false);
    return;
  },

  sampleData() {
    return this.$axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        return res.data
      })
  },

  toggleLoading({commit}, value) {
    commit('setLoading', value)
  }
};
