import React, { useState } from 'react'
import { HiOutlineBell } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
    const [isOpenBurger, setOpenForBurger] = useState(false);

    return (
        <>
            <nav className=" bg-two font-graduate fixed z-20 top-0 start-0 w-full">
                <div className="mx-auto px-3">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpenForBurger(!isOpenBurger)}>
                                <CiMenuBurger size={26} />
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="hover:text-one px-3 py-2 text-lg font-medium">Home</a>
                                    <a href="#" className="hover:text-one px-3 py-2 text-lg font-medium">Get a Car</a>
                                    <a href="#" className="hover:text-one px-3 py-2 text-lg font-medium">Sell a Car</a>
                                    <a href="#" className="hover:text-one px-3 py-2 text-lg font-medium">About Us</a>

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full p-1">
                                <HiOutlineBell size={26} className='hover:text-one' />
                            </button>
                            <button type="button" className="relative rounded-full p-1">
                                <FaMoon size={26} className='hover:text-one' />
                            </button>
                            <button class="bg-one hidden md:block border-three border rounded hover:text-three px-5 py-2 text-lg font-medium">
                                Login
                            </button>
                            <button class="bg-one hidden md:block border-three border rounded hover:text-three px-5 py-2 text-lg font-medium">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {isOpenBurger && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-3 mb-3 px-2 pb-3 pt-2 text-center">
                            <a href="#" className="block rounded-md px-3 py-2 text-lg hover:bg-one font-medium">Home</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-lg hover:bg-one font-medium">Get a Car</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-lg hover:bg-one font-medium">Sell a Car</a>
                            <a href="#" className=" block rounded-md px-3 py-2 text-lg hover:bg-one font-medium">About Us</a>
                            <div className='flex justify-evenly'>
                                <button className="bg-one md:hidden border-three border rounded hover:text-three px-3 py-2 text-lg font-medium">
                                    Login
                                </button>
                                <button className="bg-one md:hidden border-three border rounded hover:text-three px-3 py-2 text-lg font-medium">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </nav>
        </>
    )
}
