import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBar = ({drawerWidth}) => {

    const dispatch = useDispatch();

    const {displayName} = useSelector(state =>state.authentication)

    const { notes } = useSelector(state => state.journal);

    const onHandleSelectedNote = (note) =>{
        dispatch( setActiveNote(note))
    }

  return (
   <Box component='nav'
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}>
    <Drawer variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
            }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {notes.map(note=>(
                        <ListItem key={note.id} disablePadding >
                            <ListItemButton onClick={() => onHandleSelectedNote(note)}>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={note.title}/>
                                    <ListItemText secondary={'ipsum lorem'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
    </Drawer>
   </Box>
  )
}
