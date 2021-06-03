<template>
  <v-app>
    <AppHeader />
    <v-main>
      <TodoInput />
      <TodoList />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoList,
    AppFooter,
  },
  AppFooter,
};
</script>
