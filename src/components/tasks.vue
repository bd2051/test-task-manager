<template>
  <div>
    <div class="m-4 d-flex align-items-center">
      <h2>Карточки задач</h2>
      <b-button
        type="button"
        variant="success"
        class="ml-auto"
        :to="{ path: `task/new` }"
      >Новая задача</b-button>
    </div>
    <b-list-group>
      <b-list-group-item
        v-for="task in tasks"
        :key="task.key"
        :to="{ path: `task/${task.key}` }"
      >
        <b-card
          :title="task.name"
        >
          <template
            v-slot:header
          >
            <div class="d-flex justify-content-between">
              <div>{{ $moment(task.datetime).format('DD.MM.YYYY HH:mm') }}</div>
              <div>{{ task.status }}</div>
            </div>
          </template>
          <b-card-text class="text-truncate">
            {{ task.description }}
          </b-card-text>
          <template
            v-slot:footer
          >
            <vue-tags-input
              v-model="tag"
              :tags.sync=" Array.from(task.tags).map((el) => ({ text: el }))"
              :disabled="true"
              :allow-edit-tags="true"
              placeholder=""
              class="scoped-tags-input"
            />
          </template>
        </b-card>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'tasks',
  computed: {
    ...mapGetters({
      tasks: 'getTasks',
    }),
  },
  data() {
    return {
      tag: '',
    };
  },
};
</script>

<style lang="stylus" scoped>
  .scoped-tags-input
    max-width: unset
    & >>> .ti-actions
      display none
</style>
