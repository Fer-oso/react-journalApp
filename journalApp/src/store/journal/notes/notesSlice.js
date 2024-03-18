import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    note: {},
    notes:[]
  },
  reducers: {
    createNewNote: (state, action) => {
      state.note = action.payload
    },

    setNotesInList:(state,action) =>{
        state.note = {}
        state.notes = action.payload;
    },

    updateSelectedNote: (state,action) =>{
      state.notes = state.notes.map((note) =>{
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      })
    },

    deleteSelectedNote:(state,action) =>{
      state.notes = state.notes.filter(note => note.id !== action.payload)
    }

  },
});

export const { createNewNote, setNotesInList,updateSelectedNote, deleteSelectedNote } = notesSlice.actions;
