import React, { useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, FormControl, Input } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Loading from "../logo.svg"

export default function ImageComponent({ imageDetail }) {
    

    return (
        <>
            <Grid item xs={4}>
                <Card >
                    <CardContent>
                        {/* <LazyLoadComponent
                        src={imageDetail.download_url}
                        alt={imageDetail.download_url}
                        width="100%"
                        PlaceholderSrc={Loading}
                    /> */}
                        <img src={imageDetail.download_url} width="100%" loading="lazy" />
                        <Typography color="text.secondary">
                            {imageDetail.author}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
