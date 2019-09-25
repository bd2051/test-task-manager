const moment = require('moment');

export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$moment', { value: moment });
  },
};
