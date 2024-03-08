import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { ImageGallery } from './ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'

export const NoteView = () => {

    const {activeNote} = useSelector(state => state.journal);

    const {formState, onInputChange} = useForm(activeNote)

    const {title,body,date} = formState;

    const formatDate = useMemo(()=>{
        const format = new Date(date);
        return format.toUTCString();
    },[date])

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
                <Typography fontSize={29} fontWeight='light'>{formatDate}</Typography>
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
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='whats happent today?'
                    minRows={4}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}
