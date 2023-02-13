import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Button, Grid } from '@mui/material'
import axios from "axios";
import LoadingFallback from './LoadingFallback';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
// import ImageComponent from './ImageComponent';
const ImageComponent = lazy(() => import("./ImageComponent"));

export default function Images() {
    
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list")
            .then((response) => {
                setImages([...response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const fetchMoreImages = () => {
        axios.get(`https://picsum.photos/v2/list?page=${page+1}`)
            .then((res) => {
                setImages(prevImages => [...prevImages, ...res.data]);
            })
            .catch((error) => {
                console.error(error);
            })
        setPage(page+1);
    }
    useBottomScrollListener(fetchMoreImages);


    return (
        <div >
            <Grid
                container
                spacing={2}
            >
                <Suspense fallback={<LoadingFallback />}>
                    {images.map((image, idx) => <ImageComponent key={idx} imageDetail={image} />)}
                </Suspense>
            </Grid>
        </div>
    )
}
