<template>
  <div>
    <v-form @submit.prevent="addTodo">
      <v-text-field v-model="newTodo" placeholder="Write a to do" />
      <v-btn text @click.prevent="addTodo">Add tesk</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.newTodo);
      this.clearInput();
    },
    clearInput() {
      this.newTodo = '';
    },
  },
};
</script>

<style scoped>
.v-form {
  display: flex;
  align-items: center;
}
</style>
