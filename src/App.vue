<template>
  <v-app>
    <AppHeader />
    <v-main>
      <TodoInput />
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoList,
  },
};
</script>

<style scoped>
#app {
  padding: 20px 10px;
}
</style>
