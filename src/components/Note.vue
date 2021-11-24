<template>
  <v-card elevation="2" height="200">
    <v-card-title>{{ date }}</v-card-title>
    <v-card-subtitle
      ><v-icon>{{ icon }}</v-icon></v-card-subtitle
    >
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Note",
  props: ["id", "date", "text", "icon"],
};
</script>

<style></style>
