import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function HeroSection() {
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-one font-graduate">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full border-three border px-5 py-2 text-sm sm:text-lg leading-6">
                            New to this then?
                            <a href="#" className="font-semibold pl-3 sm:text-lg text-two hover:text-three">
                                <span className="absolute inset-0" aria-hidden="true"></span>Sign Up <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Buy or Sell your very 1st Car Here!!</h1>
                        <p className="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md flex items-center gap-2 px-3.5 py-2.5 border-three border hover:bg-three text-sm sm:text-lg font-semibold shadow-sm">Get started <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
