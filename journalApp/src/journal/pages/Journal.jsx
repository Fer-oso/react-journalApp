import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layouts/JournalLayout'
import { NothingSelected } from '../components/NothingSelected';

export const Journal = () => {
  return (
    <JournalLayout>
     <NothingSelected/>
    </JournalLayout>
  );
}
