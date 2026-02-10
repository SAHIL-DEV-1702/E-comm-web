
import React from 'react'
import VideoPlayer from '../componenets/VideoPlayer'
import Product from '../componenets/Product'
import { useParams } from 'react-router'
import { Videos } from '../Context/Data1'
import { items } from '../Context/Data1'

const ProductByCategory = () => {
  const { id } = useParams()

  const videosCategory = Videos.filter((e) => e.category.toLowerCase === id.toLowerCase)
  const productsCategory = items.filter((e) => e.category.toLowerCase === id.toLowerCase)

  return (
    <div>

      <VideoPlayer src={videosCategory.url} />
      <Product items={productsCategory} />

    </div>
  )
}

export default ProductByCategory