import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
        state.isSaving = false;
        state.notes.push(action.payload)
    },

    savingNewNote: (state) =>{
        state.isSaving = true
    },

    setActiveNote: (state, action) => {
        state.activeNote = action.payload

    },

    setNotes: (state, action) => {

        state.notes = action.payload

    },

    setSaving: (state) => {},

    updateNote: (state, action) => {},

    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
