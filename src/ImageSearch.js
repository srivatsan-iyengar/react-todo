import React, { Suspense, lazy } from 'react'
// import Images from './ImageSearchComponents/Images'
import LoadingFallback from './ImageSearchComponents/LoadingFallback'

const Images = lazy(() => import("./ImageSearchComponents/Images"));

export default function ImageSearch() {
  return (
    <div>
        <Suspense fallback={<LoadingFallback />}>
            <Images />
        </Suspense>
    </div>
  )
}
