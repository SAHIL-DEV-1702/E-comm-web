import React, { useContext,  } from 'react'
import DataContext from '../Context/DataContext';
import { items } from '../Context/Data1';

const ShopByCategory = () => {

  const categories = [
    {
      id: 1,
      label: "All",
      value: "all"
    },
    {
      id: 2,
      label: "Mobiles",
      value: "mobiles"
    },
    {
      id: 3,
      label: "Tablets",
      value: "tablets"
    },
    {
      id: 4,
      label: "Laptops",
      value: "laptops"
    }
  ];

  const priceFilters = [
    {
      id: 1,
      label: "All Prices",
      min: 0,
      max: Infinity
    },
    {
      id: 2,
      label: "Under ₹20,000",
      min: 0,
      max: 20000
    },
    {
      id: 3,
      label: "₹20,000 – ₹50,000",
      min: 20000,
      max: 50000
    },
    {
      id: 4,
      label: "₹50,000 – ₹1,00,000",
      min: 50000,
      max: 100000
    },
    {
      id: 5,
      label: "Above ₹1,00,000",
      min: 100000,
      max: Infinity
    }
  ];

  const { setProducts } = useContext(DataContext);
  

  const filterByCategory = (cat) => {
    if (cat.value === "all") {
      setProducts(items);
    } else {
      setProducts(items.filter(pro => pro.category.toLowerCase() === cat.value.toLowerCase()));
    }
  }

  const filterByPrice = (price) => {
    if (price.value === "all") {
      return setProducts(items);
    }
    else {
      setProducts(items.filter(pro => pro.price >= price.min && pro.price <= price.max));
    }
  }

  return (
    <>

      {/* this filter box according to product ,price */}
      <div className='flex flex-col mt-5 bg-blue-100 justify-center items-center'>

        <div className=' border-gray-600 h-40 border-3 w-11/12 mx-auto rounded-2xl flex flex-wrap items-center justify-center font-medium text-gray-800  shrink-0 gap-4 bg-slate-600 mt-5  '>

          {categories.map((e, idx) => {
            return <div key={idx} className='cursor-pointer text-center h-12 w-30 w-min-auto border-2 rounded-2xl px-2 py-2 hover:bg-gray-400 active:scale-105 bg-gray-300' onClick={() => filterByCategory(e)}>{e.label}</div>
          })

          }

          <div className='w-11/12 flex flex-wrap gap-4 flex-row items-center justify-center rounded-2xl '>
            {priceFilters.map((e, idx) => {
              return <div key={idx} className='text-center h-10 w-min-80 w-max-auto border-2 rounded-2xl px-2 py-2 hover:bg-gray-400 active:scale-105 bg-gray-300 cursor-pointer' onClick={() => filterByPrice(e)}>{e.label}</div>
            })
            }
          </div>

        </div>





      </div>
    </>
  )
}

export default ShopByCategory