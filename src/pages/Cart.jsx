import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/DataContext'
import { Link } from 'react-router'

const Cart = () => {
  const { cart, setCart } = useContext(DataContext)
  console.log(cart);

  return (
    <>
      <div className="min-h-auto bg-gray-100 p-6 border-2">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">

          {cart.length === 0 ? (<>
            <p className="text-center text-gray-500">Your cart is empty</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" > <Link to={'/'}>Continue Shopping</Link></button>
          </>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-2 border-black px-3 mb-4 py-4"
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24  object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    -
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    +
                  </button>
                </div>

                {/* Total Price */}
                <div className="font-semibold">
                  ₹{item.price * item.quantity}
                </div>

                {/* Remove Button */}
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Grand Total */}
          {cart.length > 0 && (
            <div className="text-right mt-6 text-xl font-bold  px-3 py-2 ">
              Total: ₹
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </div>
          )}
        </div>
        <div className='flex gap-40 justify-center mt-10'>
          <button className='bg-red-400 px-2 py-3 rounded-2xl active:scale-95'>LogOut</button>
          <button className='bg-blue-400 px-2 py-3 rounded-2xl active:scale-95' onClick={() => setCart([])}>Clear Cart</button>
        </div>
      </div>
    </>

  )
}

export default Cart