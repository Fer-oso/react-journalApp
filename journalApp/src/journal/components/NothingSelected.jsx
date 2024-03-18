import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export const NothingSelected = () => {

  const {notes} = useSelector(state => state.notes);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        padding: 4,
        
      }}
    >
      <Grid item xs={12}> 
        <StarOutline sx={{fontSize:100,color:'black'}}/>
      </Grid>
      <Grid item xs={12}>
        {(notes.length === 0) ?  <Typography color='black'>You not have notes Create one</Typography> :  <Typography color='black'>Select one Note</Typography> }
      </Grid>
    </Grid>
  );
}
