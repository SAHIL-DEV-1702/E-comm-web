import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Product from './Product'
import VideoPlayer from './VideoPlayer'

const AllProduct = () => {
    const { products } = useContext(DataContext)
    console.log(products);

    return (
        <>
            <VideoPlayer src={'/1video.mp4'} src2={"17video.mp4"} />
            <Product items={products} />
        </>

    )
}

export default AllProduct