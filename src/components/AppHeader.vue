<template>
  <v-container>
    <v-layout d-flex align-center justify-space-around>
      <h1>Vueing</h1>
      <h4>{{ currentDate }}</h4>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      currentDate: '',
    };
  },
  methods: {
    getCurrentDate: () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
      const date = today.getDate();

      return `${year}-${month + 1}-${date}`;
    },
  },
  created() {
    this.currentDate = this.getCurrentDate();
  },
};
</script>

<style scoped>
.container {
  border-bottom: 2px dashed;
}
</style>
