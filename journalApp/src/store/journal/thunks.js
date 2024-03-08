import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../auth/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { id } = getState().authentication;

    dispatch(savingNewNote());

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${id}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));

    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { id } = getState().authentication;

    if (!id) throw new Error("User dont exists");

    const collectionRef = collection(firebaseDB, `${id}/journal/notes`);

    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach(doc =>{
       notes.push({id:doc.id, /* ...doc.data() */ title:doc.data().title, body: doc.data().body, date:doc.data().date,  })
    })

    dispatch(setNotes(notes))
  };
};

