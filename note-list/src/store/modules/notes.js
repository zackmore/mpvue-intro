// store/modules/notes.js

const types = {
  'NEW_NOTE': 'NEW_NOTE',
  'REMOVE_NOTE': 'REMOVE_NOTE'
}

const state = {
  notes: ['apple', 'banana', 'cherry']
}

const getters = {
  notes: (state) => state.notes
}

const actions = {
  addNewNote ({ commit }, note) {
    commit(types.NEW_NOTE, note)
  },

  removeNote ({ commit }, index) {
    commit(types.REMOVE_NOTE, index)
  }
}

const mutations = {
  [types.NEW_NOTE] (state, note) {
    const newNotes = state.notes.map(n => n)
    newNotes.push(note)
    state.notes = newNotes
  },

  [types.REMOVE_NOTE] (state, index) {
    const newNotes = state.notes.map(n => n)
    newNotes.splice(index, 1)
    state.notes = newNotes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
