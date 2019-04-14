import Vue from "vue-native-core";
import Vuex from "vuex";

import postStore from "./modules/post-store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common: {
      ...postStore,
      namespaced: true
    }
  }
});

export default store;
