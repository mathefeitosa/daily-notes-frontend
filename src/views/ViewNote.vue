<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-h6">{{ note.date }}</p>
          <p>
            <v-icon>mdi-home</v-icon>
          </p>
          <v-textarea
            v-model="note.text"
            @change="onTextChangeHandler"
            hint="Type here your daily note..."
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    {{ note }}
  </div>
</template>

<script>
export default {
  name: "ViewNote",
  data() {
    return {
      note: {
        date: "00/00/0000",
        text: "",
        icon: "",
      },
    };
  },
  created() {
    this.$store.dispatch("getNotes");
    var note = this.$store.state.notes.filter((note) => {
      return note._id == this.$store.state.selectedNoteId;
    });
    this.note = note[0];
  },
  methods: {
    onTextChangeHandler() {
      console.log("text changed");
    },
  },
};
</script>
