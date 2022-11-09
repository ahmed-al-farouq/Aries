import Vuex from 'vuex';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import router from '../router/index'

const store = new Vuex.Store({
  state: {
    currentUser: {},
    signInError: null,
  },
  mutations: {
    updateSignInError(state, msg) {
      state.signInError = msg;
    }
  },
  actions: {
    async signIn({ commit }, payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        this.currentUser = userCredential.user;
        router.push('/');
      })
      .catch((error) => {
        commit('updateSignInError', error.code);
      });
    },
  }
})

export default store;