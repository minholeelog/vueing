<template>
  <v-layout class="d-flex justify-center column">
    <v-form
      class="d-flex align-center"
      ref="form"
      v-model="valid"
      @submit.prevent="addTodo"
    >
      <v-text-field
        :rules="newTodoRule"
        v-model="newTodo"
        placeholder="Write a to do"
      />
      <v-btn text @click="addTodo">Add tesk</v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      // input 유효성 검사 조건
      newTodoRule: [(v) => !!v || '할 일을 입력하세요 :)'],
      valid: false,
    };
  },
  methods: {
    addTodo() {
      if (this.$refs.form.validate() === true) {
        this.$store.commit('addTodo', this.newTodo);
        this.clearInput();
      }
    },
    clearInput() {
      this.$refs.form.reset();
      this.newTodo = '';
    },
  },
};
</script>

<style scoped></style>
