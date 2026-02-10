import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Product from './Product'
import VideoPlayer from './VideoPlayer'
import ShopByCategory from './ShopByCategory'

const AllProduct = () => {
    const { products, Videos } = useContext(DataContext)
    console.log(products,Videos.url);

    return (
        <>
            <div className='videoContainer bg-[#1F1F1F]'>
                <VideoPlayer src={Videos.url} />
            </div>
            <div ><ShopByCategory /></div>
            <div>
                <Product items={products} />
            </div>
        </>

    )
}

export default AllProduct