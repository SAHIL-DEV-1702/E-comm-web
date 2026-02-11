import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router'


const Product = ({ items }) => {

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-100 py-10 ">

        <div className="max-w-8xl mx-auto flex justify-center flex-wrap gap-8 px-4 mt-4">

          {items.map((e, idx) => (

            <div
              key={idx}
              className="w-75 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-105 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative">
                <Link to={`/product/:${e.id}`}>
                  <img
                    src={e.imgSrc}
                    alt={e.title}
                    className="px-12 py-4 object-contain rounded-t-2xl h-45 w-full"
                  />
                </Link>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {e.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 leading-snug">
                  {e.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {e.description || " "}
                </p>

                {/* Buttons Section (Always Bottom) */}
                <div className="mt-auto">
                  <p className="text-xl font-bold text-green-600 mb-3">
                    ₹{e.price}
                  </p>

                  <div className="flex gap-3">
                    {/* Add to Cart */}
                    <button
                      className="flex-1 border border-yellow-400 text-yellow-500 font-semibold py-2 rounded-xl active:scale-95 transition"
                    >
                      <FaCartShopping className="inline mr-2" /> Add to Cart
                    </button>

                    {/* Buy Now */}
                    <a
                      to={e.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition active:scale-95">
                      Buy Now
                    </a>

                  </div>
                </div>

              </div>
            </div>

          ))
          }

        </div>
      </div >

    </>
  )
}

export default Product