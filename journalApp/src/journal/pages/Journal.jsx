import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { JournalLayout } from "../layouts/JournalLayout";
import { NothingSelected } from "../components/NothingSelected";
import { NoteView } from "../components/NoteView";
import {
  Image,
  SaveOutlined
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useRef } from "react";
import { startCreationNewNote } from "../../store/journal/notes/notesThunk";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const note = { title: "", body: ""};

let images = [];

export const Journal = () => {
  const dispatch = useDispatch();

  const { activeNote } = useSelector((state) => state.journal);

  const onclickCreateNewNote = () => {
    dispatch(startCreationNewNote(formState, images));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { formState, onInputChange } = useForm(note);
  const { title, body } = formState;

  const ref = useRef();

  const onChangeInputImages = ({ target }) => {
    if (target.files === 0) return;
    images = target.files;
  };

  return (
    <JournalLayout>
      {!!activeNote ? <NoteView /> : <NothingSelected />}

      <Button
        onClick={handleOpen}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 40,
          bottom: 40,
        }}
      >
        Create new Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Note
          </Typography>

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

            <input
              type="file"
              multiple
              onChange={onChangeInputImages}
              style={{ display: "none" }}
              ref={ref}
            />

            <IconButton color="secondary" onClick={() => ref.current.click()}>
              <Image sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Select images</Typography>
            </IconButton>

            <IconButton color="secondary" onClick={onclickCreateNewNote}>
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Create Note</Typography>
            </IconButton>
          </Grid>
        </Box>
      </Modal>
    </JournalLayout>
  );
};
