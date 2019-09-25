import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      1: {
        name: 'Задача',
        tags: ['тег1', 'тег2', 'тег3'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        status: 'В работе',
        datetime: 12332455345,
      },
      2: {
        name: 'Задача2',
        tags: ['тег1', 'тег2', 'тег3'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        status: 'В работе',
        datetime: 12332455345,
      },
      3: {
        name: 'Задача3',
        tags: ['тег1', 'тег2', 'тег3'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        status: 'В работе',
        datetime: 12332455345,
      },
    },
  },
  actions: {
  },
  mutations: {
    setTask(state, { value, key }) {
      Vue.set(state.tasks, key, { ...value });
    },
  },
  getters: {
    getTasks(state) {
      return Object.keys(state.tasks).map((key) => ({
        ...state.tasks[key],
        key,
      })).sort((a, b) => a.datetime - b.datetime);
    },
    getNewKey(state) {
      const keys = Object.keys(state.tasks).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      return parseInt(keys[keys.length - 1], 10) + 1;
    },
  },
  strict: true,
});
