import React from 'react'

const Product = ({ items }) => {
  return (
    <>
      {/* <div>
        {items}
      </div> */}

      <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-100 py-10">
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-8 px-4">

          {items.map((e, idx) => (
            <div
              key={idx}
              className="w-75 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={e.imgSrc}
                  alt={e.title}
                  className=" px-12 py-4 object-cover rounded-t-2xl"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {e.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-70">

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 leading-snug">
                  {e.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {e.description}
                </p>

                {/* Price + Button */}
                <div className="mt-4">
                  <p className="text-xl font-bold text-green-600 mb-3">
                    ₹{e.price}
                  </p>

                  <a
                    href={e.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition"
                  >
                    Buy on Amazon
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div >

    </>
  )
}

export default Product