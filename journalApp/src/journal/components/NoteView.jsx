import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useMemo, useEffect, useRef } from "react";
import { ImageGallery } from "./ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startUploadAndUpdateImagesInActiveNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";

import "sweetalert2/dist/sweetalert2.css";
import {
  startDeleteSelectedNote,
  startUpdateSelectedNote,
} from "../../store/journal/notes/notesThunk";

let images = [];

export const NoteView = () => {
  const dispatch = useDispatch();

  const { activeNote, message, isSaving } = useSelector(
    (state) => state.journal
  );

  const { formState, onInputChange } = useForm(activeNote);

  const { title, body, date } = formState;

  const formatDate = useMemo(() => {
    const format = new Date(date);
    return format.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (message.length > 0) Swal.fire(activeNote.title, message, "success");
  }, [message]);

  const onClickUpdateNote = () => {
    dispatch(startUpdateSelectedNote());
  };

  const ref = useRef();

  const onChangeInputImages = ({ target }) => {
    if (target.files === 0) return;

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
           dispatch(startUploadAndUpdateImagesInActiveNote(target.files));
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onClickDeleteNote = () => {
    console.log(activeNote.id);

    dispatch(startDeleteSelectedNote(activeNote));
  };

  const drawerWidth = 240;
  return (
    <Box
      position="container"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography fontSize={20} fontWeight="light">
            {formatDate}
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="end" alignItems="left">
          <Grid item>
            <input
              type="file"
              multiple
              onChange={onChangeInputImages}
              style={{ display: "none" }}
              ref={ref}
            />

            <IconButton
              color="secondary"
              disabled={isSaving}
              onClick={() => ref.current.click()}
            >
              <UploadOutlined sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Upload</Typography>
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              disabled={isSaving}
              color="secondary"
              onClick={onClickUpdateNote}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Save</Typography>
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              disabled={isSaving}
              color="secondary"
              onClick={onClickDeleteNote}
            >
              <DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Delete</Typography>
            </IconButton>
          </Grid>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Write one title"
            label="Title"
            sx={{ border: "none", mb: 1 }}
            name="title"
            value={title}
            onChange={onInputChange}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="whats happent today?"
            minRows={4}
            name="body"
            value={body}
            onChange={onInputChange}
          />
        </Grid>
        <ImageGallery images={activeNote.images} />
      </Grid>
    </Box>
  );
};
