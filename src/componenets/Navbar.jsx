import React from 'react'
import { FaMagnifyingGlass, FaAmazon, FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className="w-full bg-[#201f1f] px-4 py-3">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-white">
                        <FaAmazon className="h-8 w-8" />
                        <span className="font-bold text-2xl">Amazon</span>
                    </Link>

                    {/* Search Bar */}
                    <form className="flex w-full md:w-1/2">
                        <input
                            type="search"
                            className="flex-1 px-3 py-2 text-gray-800 bg-white rounded-full outline-none"
                            placeholder="Search Here"
                        />
                        <button className="bg-amber-400 px-4 flex items-center justify-center rounded-full">
                            <FaMagnifyingGlass />
                        </button>
                    </form>

                    {/* Categories (Hide on small screens) */}
                    <ul className="hidden md:flex gap-6 font-bold text-white">
                        {["Mobiles", "laptops", "Tablets", "Watches"].map((ele) => (
                            <li key={ele}>
                                <Link to={`/product/category/${ele}`}>{ele}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Cart */}
                    <Link to="/Cart" className="text-white">
                        <FaCartShopping size={28} />
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Navbar