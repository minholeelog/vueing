<template>
  <ul class="d-flex row">
    <li v-for="(todo, index) in todos" :key="todo.id">
      <v-card class="d-flex justify-space-between">
        <v-card-title>{{ todo.title }}</v-card-title>
        <v-icon @click="removeTodo(todo, index)">remove_circle</v-icon>
      </v-card>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  methods: {
    removeTodo(todo, index) {
      const currentTodoObj = {
        todo,
        index,
      };
      this.$store.commit('removeTodo', { todo, currentTodoObj });
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  padding: 10px 14px;
}
li {
  list-style: none;
  width: 100%;
  margin-bottom: 12px;
}
.v-card {
  padding: 0 10px;
}
</style>
