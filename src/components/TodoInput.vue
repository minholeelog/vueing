<template>
  <div>
    <v-form @submit.prevent="addTodo">
      <v-text-field v-model="newTodo" />
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
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 50%;
}
</style>
