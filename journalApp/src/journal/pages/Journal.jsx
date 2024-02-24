import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layouts/JournalLayout'
import { NothingSelected } from '../components/NothingSelected';
import { NoteView } from '../components/NoteView';
import { AddOutlined } from '@mui/icons-material';

export const Journal = () => {
  return (
    <JournalLayout>
      <NoteView />
      { /*<NothingSelected/>*/}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.5 },
          position: 'fixed',
          right: 50,
          bottom: 5
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
}
