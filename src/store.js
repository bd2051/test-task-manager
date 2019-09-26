import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = localStorage.getItem('tasks');

export default new Vuex.Store({
  state: {
    tasks: storage ? JSON.parse(storage) : {},
  },
  actions: {
  },
  mutations: {
    setTask(state, { value, key }) {
      Vue.set(state.tasks, key, { ...value });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  getters: {
    getTasks(state) {
      return Object.keys(state.tasks).map((key) => ({
        ...state.tasks[key],
        key,
      })).sort((a, b) => a.datetime - b.datetime);
    },
  },
  strict: true,
});
