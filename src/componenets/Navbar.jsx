import React from 'react'
import { FaMagnifyingGlass, FaAmazon, FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className='navbar w-full min-h-20 bg-[#201f1f]  px-4 py-2 ' >

                <div className='w-full h-full flex '>

                    <Link to='/' className='flex' >
                        <FaAmazon className='text-white h-10 w-10 ' />
                        <span className='font-bold border-red-400 text-2xl'>Amazon</span>
                    </Link>

                    <form action="" className='flex m-auto'>
                        <input type="search" className='search-input px-3 w-120 text-gray-800 bg-white  rounded-2xl' placeholder='Search Here ' />
                        <button className='search-btn bg-amber-200 h-9 w-9 flex justify-center items-center rounded-full text-black'><FaMagnifyingGlass className='h-8'></FaMagnifyingGlass></button>

                    </form>

                    <ul className=' flex gap-5 mx-auto mt-3 font-bold '>
                        {["Mobiles", "laptops", "Tablests", "Watches"].map((ele) =>
                            <li key={ele} className=' category-link'>
                                <Link to={`/product/category/${ele}`} className=''>{ele}</Link>
                            </li>
                        )}
                    </ul>

                    <Link to='/Cart' className=' flex justify-center items-center h-12 w-10 active:scale-93' >
                        <FaCartShopping size={30}> </FaCartShopping>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default Navbar