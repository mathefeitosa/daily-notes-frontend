<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Daily Notes</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.dispatch("getNotes");
  },
  data: () => ({
    //
  }),
};
</script>
