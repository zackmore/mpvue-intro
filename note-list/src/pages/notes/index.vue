<template>
  <div>
    <h1>My Notes</h1>
    <ul>
      <li v-for="(note, idx) in notes" :key="idx">
        <p>{{ note }}</p>
        <b @click="deleteNote(idx)">-</b>
      </li>
    </ul>

    <div class="newbox">
      <input type="text" v-model="noteText" placeholder="note text...">
      <button @click="addNote">+ New</button>
    </div>
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

    deleteNote(index) {
      this.removeNote(index)
    },

    ...mapActions([
      'addNewNote',
      'removeNote'
    ])
  }
}
</script>

<style scoped>
h1 {
  text-align: center
}

ul {
  padding: 20px
}

li {
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

li p {
  max-width: 90%;
  word-break: break-word;
}

.newbox {
  margin: 20px
}

.newbox input {
  display: flex;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  margin: 10px;
  border: 1px solid #ccc;
}

button {
  background: steelblue;
  color: white;
}
</style>
