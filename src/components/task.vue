<template>
  <div>
    <div v-if="hasTask||isNewTask">
      <div class="m-4 d-flex align-items-center">
        <h2 v-if="isNewTask">Создание новой задачи</h2>
        <h2 v-else>Редактирование задачи</h2>
        <b-button
          type="button"
          variant="info"
          class="ml-auto"
          :to="{ path: `/` }"
        >Назад</b-button>
      </div>
      <task-form
        :task="task"
        :has-complete-button="!isNewTask"
        class="m-2 p-3 scoped-task"
        @task="onTask"
      />
    </div>
    <h2 v-else>Задача не существует</h2>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import TaskForm from './taskForm.vue';
import { setDefaultTask, getNewKey } from '../utils';

export default {
  name: 'task',
  components: { TaskForm },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['tasks']),
    isNewTask() {
      return this.taskKey === 'new';
    },
    hasTask() {
      return Boolean(this.tasks[this.taskKey]);
    },
    taskKey() {
      return this.$route.params.key;
    },
    task() {
      return this.isNewTask ? setDefaultTask() : this.tasks[this.taskKey];
    },
  },
  watch: {
  },
  created() {
  },
  methods: {
    ...mapMutations(['setTask']),
    onTask(value) {
      this.setTask({
        value,
        key: this.isNewTask ? getNewKey() : this.taskKey,
      });
      this.$router.replace({ path: '/' });
    },
  },
};
</script>

<style lang="stylus" scoped>
  .scoped-task
    border 1px solid lightgray
    border-radius 5px
</style>
