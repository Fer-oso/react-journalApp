import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelected = () => {
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
        <Typography color='black'>Select one Work</Typography>
      </Grid>
    </Grid>
  );
}
