<template>
  <div>
    <h1>My Notes</h1>
    <ul>
      <li v-for="(note, idx) in notes" :key="idx">
        {{ note }}
      </li>
    </ul>
    <br>
    <br>
    <br>
    <br>
    <input type="text" v-model="noteText">
    <button @click="addNote">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      noteText: ''
    }
  },

  computed: {
    ...mapGetters([
      'notes'
    ])
  },

  methods: {
    addNote() {
      if (this.noteText.trim().length) {
        this.addNewNote(this.noteText.trim())
      }
      this.noteText = ''
    },

    ...mapActions([
      'addNewNote'
    ])
  }
}
</script>

<style>
</style>
