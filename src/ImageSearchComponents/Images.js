import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Button, Grid, FormControl, Input } from '@mui/material'
import axios from "axios";
import LoadingFallback from './LoadingFallback';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import ImageComponent from './ImageComponent';
// const ImageComponent = lazy(() => import("./ImageComponent"));

export default function Images() {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [authorName, setAuthorName] = useState("")

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list")
            .then((response) => {
                setImages([...response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const filterRecord = (authorName) => {

    }

    const fetchMoreImages = () => {
        axios.get(`https://picsum.photos/v2/list?page=${page + 1}`)
            .then((res) => {
                setImages(prevImages => [...prevImages, ...res.data]);
            })
            .catch((error) => {
                console.error(error);
            })
        setPage(page + 1);
    }
    useBottomScrollListener(fetchMoreImages);


    return (
        <div >
            <Grid
                container
                spacing={2}
            >
                <FormControl>
                    <Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                </FormControl>
                <Suspense fallback={<LoadingFallback />}>
                    {images.map((image, idx) => <ImageComponent key={idx} imageDetail={image} />)}
                </Suspense>
            </Grid>
        </div>
    )
}
