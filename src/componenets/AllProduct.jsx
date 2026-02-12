import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Product from './Product'
import VideoPlayer from './VideoPlayer'
import ShopByCategory from './ShopByCategory'
import { Videos } from '../Context/Data1'
import Cart from '../pages/Cart'

const AllProduct = () => {
    const { products, Videos, cart  } = useContext(DataContext)
    console.log("cart product", products, cart);

    return (
        <>

            <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4" />

            <div ><ShopByCategory /></div>
            <div>
                <Product items={products} />
            </div>
        </>

    )
}

export default AllProduct