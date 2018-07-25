<template>
  <div>
    <h1>My Notes</h1>
    <ul>
      <li v-for="(note, idx) in notes" :key="idx">
        {{ note }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      newNote: ''
    }
  },

  computed: {
    ...mapGetters([
      'notes'
    ])
  }
}
</script>

<style>
</style>
