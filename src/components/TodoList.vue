<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.title">
        <span>{{ todo.title }}</span>
        <v-icon @click="removeTodo(todo, index)">remove_circle</v-icon>
      </li>
    </ul>
  </div>
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
      const todoObj = {
        todo,
        index,
      };
      this.$store.commit('removeTodo', { todo, todoObj });
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  padding: 10px 14px;
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
