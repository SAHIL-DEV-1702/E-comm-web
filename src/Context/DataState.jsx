import React, { useState } from 'react'
import DataContext from './DataContext'
import { items } from './Data1.js'

export const DataState = (props) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(items)
  return (
    <DataContext.Provider value={{ products, setCart, setProducts, cart }}>
      {props.children}
    </DataContext.Provider>
  )
}
