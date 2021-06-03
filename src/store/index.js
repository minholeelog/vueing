import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [],
  },
  mutations: {
    addTodo(state, todo) {
      const todoObj = {
        todo,
        completed: false,
      };
      localStorage.setItem(todo, JSON.stringify(todoObj));
      state.todoItems.push(todoObj);
    },
  },
  actions: {},
  modules: {},
});
