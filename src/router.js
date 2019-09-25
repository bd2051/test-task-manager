import Vue from 'vue';
import VueRouter from 'vue-router';
import tasks from './components/tasks.vue';
import task from './components/task.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: tasks },
  { path: '/task/:key', component: task },
  { path: '*', redirect: '/' },
];

export default new VueRouter({
  routes,
});
