import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
   <Box sx={{display: 'block'}}  className='animate__animated animate__fadeIn animate__faster'>
   
    <SideBar drawerWidth={drawerWidth}/>
        <Box component='main' sx={{flexGrow:1,p:1}}>
        <Toolbar/>
                {children}
        </Box>
   </Box>
  )
}
