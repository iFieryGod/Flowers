import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfiles: {}
  },
  mutations: {
    setUserProfile(state, value){
      state.userProfiles = value
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // signing in a user
      const { user } = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
      // fetch the user profile and set in state
      dispatch('fetchUserProfile', user)
    }, 
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await firebase.userProfiles.doc(user.uid).get()
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      // change route to dashboard
      router.push('/')
    }
  },
  modules: {
  }
})
