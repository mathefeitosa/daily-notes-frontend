<template>
  <div>
    <v-container>
      <v-text-field
        label="Search example: 11/16/2021"
        solo
        v-model="search"
      ></v-text-field>
      <v-row>
        <v-col
          cols="6"
          sm="6"
          md="4"
          xl="2"
          lg="4"
          v-for="note in filteredNotes"
          v-bind:key="note._id"
        >
          <v-card elevation="3" height="200">
            <v-card-title>{{ note.date }}</v-card-title>
            <v-card-subtitle><v-icon>mdi-home</v-icon></v-card-subtitle>
            <v-card-text>{{ note.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn fab large bottom right rounded fixed class="v-btn--example">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      this.$store.dispatch("updateSearch", this.search);
    },
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
    filteredNotes() {
      return this.notes.filter((note) => {
        return note.date.includes(this.$store.state.search);
      });
    },
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>
