import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    message: "",
    activeNote: null,
  },
  reducers: {

    setActiveNote: (state, action) => {
      state.isSaving = false;
      state.activeNote = action.payload;
      state.message = "";
    },

    setSaving: (state) => {
      state.isSaving = true;
    },

    messageNoteUpdated: (state) => {
      state.message = "Note Updated Successfully 😊";
      state.isSaving = false;
    },

    setImagesInActiveNote: (state,action) =>{
        state.activeNote.images = [...state.activeNote.images, ...action.payload];
        state.isSaving = false;
    },

  },
});

export const {
  setActiveNote,
  setSaving,
  messageNoteUpdated,
  setImagesInActiveNote,
} = journalSlice.actions;
