<template>
  <ul class="d-flex row">
    <li v-for="(todo, index) in todos" :key="todo.id">
      <v-card class="d-flex justify-space-between">
        <div class="d-flex justify-space-around align-center">
          <v-icon v-if="todo.completed" @click="toggleComplete(todo, index)"
            >done</v-icon
          >
          <v-icon v-else @click="toggleComplete(todo, index)"
            >check_box_outline_blank</v-icon
          >
          <v-card-title :class="{ completed: todo.completed }">{{
            todo.title
          }}</v-card-title>
        </div>
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
    toggleComplete(todo, index) {
      const currentTodoObj = {
        todo,
        index,
      };
      this.$store.commit('toggleComplete', { todo, currentTodoObj });
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
.completed {
  text-decoration: line-through;
  color: #8c3048;
}
</style>
