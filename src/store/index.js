import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storedTodo = {
  fetchTodo() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const currentKey = localStorage.key(i);
        // webpack에서 자동으로 로컬 스토리지에 주입하는 키 값 제외
        if (currentKey.includes('loglevel')) {
          continue;
        }
        arr.push(JSON.parse(localStorage.getItem(currentKey)));
      }
    }
    return arr;
  },
};

export default new Vuex.Store({
  state: {
    todos: storedTodo.fetchTodo(),
    github: 'https://github.com/minholeelog',
  },
  mutations: {
    addTodo(state, title) {
      const todoObj = {
        title,
        completed: false,
        id: new Date().getTime(),
      };
      localStorage.setItem(title, JSON.stringify(todoObj));
      state.todos.push(todoObj);
    },

    removeTodo(state, payload) {
      localStorage.removeItem(payload.todo.title);
      // 기존 코드: state.todos.splice(payload.index, 1);
      // payload.index = undefined 이기 때문에 splice 범위를 제대로 받지 못하여 에러 발생
      state.todos.splice(payload.currentTodoObj.index, 1);
    },
  },
  actions: {},
  modules: {},
});
