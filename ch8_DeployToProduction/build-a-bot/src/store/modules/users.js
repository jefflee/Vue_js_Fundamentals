import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    foo(state, getters, rootState) {
      return `users-getter/${rootState.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      console.log('Users addRobotTOCart called');
    },
  },
};
