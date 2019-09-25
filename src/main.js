import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueTagsInput from '@johmun/vue-tags-input';
import DatePick from 'vue-date-pick';
import App from './App.vue';
import router from './router';
import store from './store';

import moment from './plugins/moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-date-pick/dist/vueDatePick.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(moment);
Vue.use(VueTagsInput);
Vue.component('date-pick', DatePick);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
