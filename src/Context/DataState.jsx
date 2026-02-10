import React, { useState } from 'react'
import DataContext from './DataContext'
import { items, Videos } from './Data1.js'

export const DataState = (props) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(items)
  return (
    <DataContext.Provider value={{Videos, products, setCart, setProducts, cart }}>
      {props.children}
    </DataContext.Provider>
  )
}
