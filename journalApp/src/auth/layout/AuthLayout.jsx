import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({children, title=''}) => {
  return (
     <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4
      }}>

      <Grid
      
        item
        className='box-shadow'
        xs={12}
        md={6}
        xl={4}
        sx={{
          width: {sm:450},
          backgroundColor: 'primary.second',
          padding:2,
          borderRadius: 2
        }}>
        <Typography variant='h5' sx={{ mb: 2 }} color='black'>{title}</Typography>

        {children}

        </Grid>
        </Grid>
  )
}
