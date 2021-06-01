<template>
  <div id="app">
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500&display=swap');

#app {
  font-family: 'Sunflower', sans-serif;
  text-align: center;
}
</style>
