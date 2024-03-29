import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {authentication},
});