import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
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
                xs={12}
                md={6}
                xl={4}
                sx={{
                    width: { sm: 450 },
                }}>
                    <CircularProgress color='warning'/>
            </Grid>
        </Grid>
    )
}
