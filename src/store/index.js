import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filePlaying: false,
    sTitle: "",
    sAlbum: "",
    sArtist: "",
    sURL: ""
  },
  mutations: {
    setPlayingState (state, val) {
        state.filePlaying = val
    },
    setSong(state, aVal){
      state.sAlbum = aVal.sAlbum
      state.sTitle = aVal.sTitle
      state.sArtist = aVal.sArtist
      state.sURL = aVal.sURL

    }
  },
  actions: {
  },
  modules: {
  }
})
