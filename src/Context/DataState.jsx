import React, { useState } from 'react'
import DataContext from './DataContext'
import { items, Videos } from './Data1.js'
import { ToastContainer, toast, Bounce } from 'react-toastify';

export const DataState = (props) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(items)

  const addToCart = (id, title, price, image) => {

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      toast.success('Item quantity updated!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      toast.success('Item added to cart!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setCart([...cart, { id, title, price, image, quantity: 1 }]);
    }
  }
  console.log(cart)

  return (
    <DataContext.Provider value={{ Videos, products, setCart, setProducts, cart, addToCart }}>
      {props.children}
    </DataContext.Provider>
  )
}
