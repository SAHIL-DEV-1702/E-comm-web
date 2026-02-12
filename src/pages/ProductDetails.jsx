import { useParams } from 'react-router'
import { items } from '../Context/Data1'
import Product from '../componenets/Product'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { useContext } from 'react'
import DataContext from '../Context/DataContext'
import { ToastContainer, Bounce } from 'react-toastify'

const ProductDetails = () => {
  const { addToCart } = useContext(DataContext)

  const { id } = useParams();

  const product = items.find(e => e.id == id);

  const realtedProduct = items.filter(e => e.category == product.category)


  return (
    <>
      <ToastContainer />
      <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 p-10">

        <div className="md:w-1/2 flex flex-col justify-center items-center border rounded-2xl p-6">
          <div className='text-3xl font-bold mb-4 text-gray-700'>{product.title}</div>
          <img
            src={product.imgSrc}
            alt={product.title}
            className="max-h-100 rounded-2xl p-2"
          />
          <div className='text-l text-black m-5'>{product.description}</div>

          <div className='text-xl font-bold text-white bg-blue-300 flex justify-center items-center px-3 rounded-xl'><FaIndianRupeeSign className=" h-4" />{product.price}/-</div>

          <div className='flex justify-center gap-10 mt-4 w-full'>

            <div className='hover:bg-gray-600 hover:hover:text-white text-xl font-bold text-gray-500 flex border-2 justify-center items-center p-2 rounded-2xl active:scale-95' onClick={() => addToCart(
              product.id,
              product.title,
              product.price,
              product.imgSrc
            )}>Add To Cart</div>

            <div className='hover:bg-gray-600 hover:text-white text-xl font-bold text-gray-500 flex border-2 justify-center items-center p-2 rounded-2xl active:scale-95' onClick={() => window.open(product.amazonLink, '_blank')}>Buy Now</div>
          </div>

        </div>








        <div className="md:w-1/2">

          <h2 className="text-2xl font-bold mb-6 text-gray-500">
            Recommended Products
          </h2>


          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

            {realtedProduct.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-32 mx-auto object-contain mb-4"
                />

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition active:scale-95" onClick={() => addToCart(
                  item.id,
                  item.title,
                  item.price,
                  item.imgSrc
                )}>
                  Add to Cart
                </button>
              </div>
            ))}

          </div>
        </div>

      </div>
    </>
  )
}

export default ProductDetails