import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "https://boiling-oasis-59814.herokuapp.com/";

export default new Vuex.Store({
  state: {
    notes: [],
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxOTJjNzRhMjQ2Y2E1MDgwMzU5ZDJlYiIsImV4cCI6MTYzNzc3MTczN30.uLlaULoP1fzISAbrakekEaLx-nYffa2zFT74moXsq9A",
    email: null,
    search: "",
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    getNotes({ commit }) {
      axios
        .post("/notes", {
          token: this.state.token,
        })
        .then((response) => {
          commit("setNotes", response.data);
        });
    },
    login({ commit }, credentials) {
      axios.post("/login", credentials).then((response) => {
        commit("setToken", response.data.token);
        commit("setEmail");
      });
    },
    updateSearch({ commit }, search) {
      commit("setSearch", search);
    },
  },
  modules: {},
});
