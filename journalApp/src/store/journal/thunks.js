import {
  setImagesInActiveNote,
  setSaving,
  
} from "./journalSlice";
import { fileUpload } from "../../journal/helper/fileUpload";

export const startUploadAndUpdateImagesInActiveNote = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    const fileUploadArray = [];

    for (const file of files) {
      fileUploadArray.push(fileUpload(file));
    }

    const photosUploaded = await Promise.all(fileUploadArray);

    dispatch(setImagesInActiveNote(photosUploaded));
  };
};


