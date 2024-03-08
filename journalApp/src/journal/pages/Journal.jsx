import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layouts/JournalLayout";
import { NothingSelected } from "../components/NothingSelected";
import { NoteView } from "../components/NoteView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const Journal = () => {
  const dispatch = useDispatch();

  const { isSaving, activeNote } = useSelector((state) => state.journal);

  const onClickAddNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      { (!!activeNote) ? <NoteView /> :  <NothingSelected />  }
      <IconButton
        onClick={onClickAddNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 5,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
