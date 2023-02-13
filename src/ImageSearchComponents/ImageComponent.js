import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'

export default function ImageComponent({ imageDetail }) {
    return (
        <Grid item xs={4}>
            <Card >
                <CardContent>
                    <img style={{ width: "100%" }} src={imageDetail.download_url} alt={imageDetail.url} />
                    <Typography color="text.secondary">
                        { imageDetail.author }
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
