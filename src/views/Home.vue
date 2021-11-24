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
          @click="noteClickHandler(note._id)"
        >
          <note :date="note.date" :id="note._id" :text="note.text"></note>
        </v-col>
      </v-row>
    </v-container>
    <v-btn fab large bottom right rounded fixed class="v-btn--example">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
export default {
  name: "Home",
  components: { Note },
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
  methods: {
    noteClickHandler(id) {
      console.log("Loading this note ==>", id);
      this.$store.dispatch("selectNote", id);
      this.$router.push("/viewnote");
    },
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>
