import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from './ImageGallery'

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
                <Typography fontSize={29} fontWeight='light'>February 24, 2024</Typography>
            </Grid>
            <Grid item>
                <Button color='secondary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Write one title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='whats happent today?'
                    minRows={4}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}
