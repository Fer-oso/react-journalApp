import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { firebaseDB } from "../../../auth/firebase/config";
import {
  createNewNote,
  deleteSelectedNote,
  setNotesInList,
  updateSelectedNote,
} from "./notesSlice";
import { fileUpload } from "../../../journal/helper/fileUpload";
import { messageNoteUpdated, setImagesInActiveNote, setSaving } from "../journalSlice";

export const startCreationNewNote = (newNote, images = []) => {
  return async (dispatch, getState) => {
    const { id } = getState().authentication;

    const imagesToNewNote = [];

    for (const image of images) {
      imagesToNewNote.push(fileUpload(image));
    }

    const photosUploaded = await Promise.all(imagesToNewNote);

    newNote.images = photosUploaded;

    newNote.date = new Date().getTime();

    const newDoc = doc(collection(firebaseDB, `${id}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    console.log(newNote);

    dispatch(createNewNote(newNote));

    dispatch(setNotesInList(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { id } = getState().authentication;

    if (!id) throw new Error("User dont exists");

    const collectionRef = collection(firebaseDB, `${id}/journal/notes`);

    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach((doc) => {
      notes.push({
        id: doc.id,
        /* ...doc.data() */
        title: doc.data().title,
        body: doc.data().body,
        images: doc.data().images,
        date: doc.data().date,
      });
    });

    dispatch(setNotesInList(notes));
  };
};

export const startUpdateSelectedNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { id } = getState().authentication;

    const { activeNote} = getState().journal;

    const noteToFirestore = { ...activeNote };

    delete noteToFirestore.id;

    const docRef = doc(firebaseDB, `${id}/journal/notes/${activeNote.id}`);

    await updateDoc(docRef, noteToFirestore);

    dispatch(messageNoteUpdated());

    dispatch(updateSelectedNote(activeNote));
  };
};

export const startDeleteSelectedNote = (activeNote) => {
  return async (dispatch, getState) => {
    const { id } = getState().authentication;

    if (activeNote !== null) {
      dispatch(deleteSelectedNote(activeNote.id));
    }

    const docRef = doc(firebaseDB, `${id}/journal/notes/${activeNote.id}`);

    await deleteDoc(docRef);
  };
};
