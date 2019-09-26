<template>
  <b-form
    @submit.prevent="onSubmit"
    @reset="onReset"
  >
    <b-form-group
      label="Название"
      label-for="input-name"
    >
      <b-form-input
        id="input-name"
        v-model="model.name"
        required
        placeholder="Введите название"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      label="Описание"
      label-for="input-description"
    >
      <b-form-textarea
        id="input-description"
        v-model="model.description"
        required
        placeholder="Введите описание"
        rows="3"
        max-rows="6"
        maxlength="2048"
      ></b-form-textarea>
    </b-form-group>
    <div class="d-flex align-items-end mb-5">
      <b-form-group
        label="Теги"
        class="mb-0 flex-grow-1"
      >
          <vue-tags-input
            v-model="tag"
            :tags.sync="model.tags"
            placeholder=""
          />
      </b-form-group>
      <date-pick
        v-model="model.datetime"
        :pickTime="true"
        :format="DATETIME_FORMAT"
        class="scoped-data-picker"
      />
    </div>
    <div class="d-flex">
      <b-button
        v-if="hasCompleteButton"
        type="button"
        :variant="isInWork ? 'success' : 'warning'"
        @click="onCLickComplete"
      >
        <div v-if="isInWork">Выполнено</div>
        <div v-else>В работе</div>
      </b-button>
      <b-button
        type="submit"
        variant="primary"
        class="ml-auto mr-2"
      >Сохранить</b-button>
      <b-button
        type="reset"
        variant="danger"
      >Очистить</b-button>
    </div>
  </b-form>
</template>

<script>
import { setDefaultTask } from '../utils';

export default {
  name: 'taskForm',
  props: {
    task: {
      type: Object,
      required: true,
      validator: (val) => Object.keys(setDefaultTask()).every((prop) => prop in val),
    },
    hasCompleteButton: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      DATETIME_FORMAT: 'DD.MM.YYYY HH:mm',
      model: {},
      tag: '',
    };
  },
  computed: {
    isInWork() {
      return this.model.status === 'В работе';
    },
  },
  watch: {
    task: {
      handler(val) {
        this.setModel(val);
      },
      deep: true,
    },
  },
  created() {
    this.setModel(this.task);
  },
  methods: {
    setModel(value) {
      this.model = { ...value };
      this.model.datetime = this.$moment(this.model.datetime).format(this.DATETIME_FORMAT);
      this.model.tags = this.model.tags.map((el) => ({ text: el }));
    },
    getModel() {
      const value = {
        ...this.model,
      };
      value.datetime = this.$moment(this.model.datetime, this.DATETIME_FORMAT).valueOf();
      value.tags = this.model.tags.map((el) => el.text);
      return value;
    },
    onSubmit() {
      this.$emit('task', this.getModel());
    },
    onReset() {
      this.setModel(setDefaultTask());
    },
    onCLickComplete() {
      if (this.isInWork) {
        this.model.status = 'Выполнено';
      } else {
        this.model.status = 'В работе';
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
  .scoped-data-picker
    & >>> input
      height 38px
      font-size 1rem
      text-align center
</style>
