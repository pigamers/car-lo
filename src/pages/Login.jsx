import React from 'react'
import { LuLogIn } from "react-icons/lu";

export default function Login() {
    return (
        <>
            <div className="flex min-h-full flex-col bg-two font-graduate justify-center px-6 py-12 lg:px-8 h-screen">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <LuLogIn size={80} className='text-one m-auto' />
                    <h2 className="mt-10 text-center text-2xl font-bold">Log in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-8" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-lg font-medium">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border border-three px-3 py-2 shadow-sm" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-lg font-medium">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border border-three py-2  shadow-sm" />
                            </div>
                        </div>

                        <div className='mx-5'>
                            <button class="w-full my-2 rounded-md bg-one border-three border hover:text-three px-3 py-2 text-lg font-medium">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-lg">
                        Not a member?
                        <a href="#" className="font-semibold hover:text-one px-2">Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    )
}
