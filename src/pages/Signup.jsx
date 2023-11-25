import Img from "/image.png"
import useValidate from '../hooks/useValidate.js';
import React from 'react'

export default function SignupPage() {
    const { handleChange, handleSubmit, errs, loading } = useValidate({ params: { fullname: "", email: "", password: "", password_repeat: "" }, type: 'signup' });


    return (
        <div className="flex flex-wrap w-full">
            <div className="w-1/2 flex justify-center h-screen bg-secondary">
                <div className="pt-12 pb-12 flex flex-col w-4/5 h-full justify-center text-center text-secondary-content">
                    <p className="text-3xl font-bold">
                        Welcome to my password validator
                    </p>

                    <p className="text-xl mt-2">
                        If you already have an account go to the log in page.
                    </p>
                    <div className="flex justify-center">
                        <img src={Img} className="w-1/3"></img>
                    </div>
                    <div>
                        <a href="/login" className="btn w-40 font-semibold hover:bg-neutral-content hover:text-secondary-focus">
                            Log In
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center text-secondary">
                        Join Us
                    </p>
                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="text" name="fullname" id="signup-fullname" className=" flex-1 appearance-none border border-secondary rounded-md w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Full Name" />
                            </div>
                            <div className="h-4">
                                {errs?.fullname && <p className={` text-red-700 font-light`}>{errs?.fullname}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="text" name="email" id="signup-email" className=" flex-1 appearance-none border border-secondary rounded-md w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Email" />
                            </div>
                            <div className="h-4">
                                {errs?.email && <p className={` text-red-700 font-light`}>{errs?.email}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative">
                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="password" name="password" id="signup-password" className=" flex-1 appearance-none border border-secondary rounded-md w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Password" />
                            </div>
                            <div className="h-4">
                                {errs?.password && <p className={` text-red-700 font-light`}>{errs?.password}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-12">
                            <div className="flex relative">
                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="password" name="password_repeat" id="signup-password-repeat" className=" flex-1 appearance-none border border-secondary rounded-md w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Repeat Password" />
                            </div>
                            <div className="h-4">
                                {errs?.password_repeat && <p className={` text-red-700 font-light`}>{errs?.password_repeat}</p>}
                            </div>
                        </div>
                        <button disabled={loading ? "disabled" : ""} onClick={handleSubmit} className="w-full px-4 py-2 text-base font-semibold text-center text-secondary-content rounded-md transition duration-200 ease-in bg-secondary shadow-md hover:text-secondary hover:bg-secondary-content disabled:text-secondary disabled:bg-secondary-content focus:outline-none focus:ring-2">
                            <span className="w-full">
                                {loading ? "loading..." : "Submit"}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}