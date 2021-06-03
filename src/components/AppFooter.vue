<template>
  <v-footer>
    <v-container>
      <v-layout class="d-flex justify-space-around">
        <span>
          Lee Minho
        </span>
        <span>
          <a :href="this.$store.state.github">
            GitHub
          </a>
        </span>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
