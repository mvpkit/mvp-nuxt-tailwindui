export const state = () => ({
  model: {
    brands: [],
    id: '',
    email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    facebookUserName: '',
    instagramUserName: '',
    venmoUserName: '',
    status: '',
    data: '',
    createdAt: '',
    deletedAt: ''
  },

  newUser: {},

  user: {},
  users: []
});

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setUsers(state, users) {
    state.users = users
  },
  initNewUser(state) {
    state.newUser = state.model
  },
  setNewUserValue(state, data) {
    state.newUser = { ...state.newUser, ...data }
  },
  resetNewUser(state) {
    state.newUser = {}
  }

};

export const getters = {
  user(state) {
    return state.user
  },
  users(state) {
    return state.users
  },
  newUser(state) {
    return state.newUser
  },
  newFullName(state) {
    if (state.newUser.firstName) {
      return state.newUser.firstName + ' ' + state.newUser.lastName
    }
    return ''
  }
};

export const actions = {
  create ({commit}, {brandId, user}) {
    const { email, password, street1, city, state, zip, phone, birthDate, instagram, facebook, youtube, firstName, lastName } = user
    return this.$axios.post('/users', { email, password, street1, city, state, zip, phone, birthDate, instagram, facebook, youtube, firstName, lastName })
      .then(res => {
        commit('setUser', res.data)
        return res.data
      })
  },
  getUsers ({commit}) {
    return this.$axios.get('/users')
      .then(res => {
        commit('setUsers', res.data)
        return res.data
      })
  },
  getById({commit}, id) {
    return this.$axios.get(`/users/${id}`)
      .then(res => {
        commit('setUser', res.data)
        return res.data
      })
  },

  update({commit}, {id, user}) {
    const { email, password, street1, city, state, zip, phone, birthDate, instagram, facebook, youtube, firstName, lastName } = user
    return this.$axios.patch(`/users/${id}`, { email, password, street1, city, state, zip, phone, birthDate, instagram, facebook, youtube, firstName, lastName })
      .then(res => {
        commit('setMission', res.data)
      })
  }
};
