import moment from 'moment';

export const setDefaultTask = () => ({
  name: '',
  tags: [],
  description: '',
  status: 'В работе',
  datetime: moment().add(1, 'day').valueOf(),
});
