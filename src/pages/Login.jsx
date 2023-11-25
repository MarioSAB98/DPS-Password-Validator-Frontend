import Img from "/image.png"
import useValidate from '../hooks/useValidate.js';

export default function LoginPage() {
    const { handleChange, handleSubmit, errs, loading } = useValidate({ params: { email: "", password: "" }, type: 'login' });
    return (
        <div className="flex flex-wrap h-full w-full bg-base">

            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center text-secondary">
                        Login to your account
                    </p>
                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4 ">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t border-l border-b rounded-tl-md rounded-bl-md  border-secondary text-secondary shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>

                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="text" name="email" id="login_email" className=" flex-1 appearance-none border rounded-tr-md rounded-br-md border-secondary w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Email" />
                            </div>
                            <div className="h-4">
                                {errs?.email && <p className={` text-error font-light`}>{errs.email}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-12">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t border-l border-b rounded-tl-md rounded-bl-md  border-secondary text-secondary shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                <input disabled={loading ? "disabled" : ""} onChange={handleChange} type="password" name="password" id="login_password" className=" flex-1 appearance-none border border-secondary rounded-tr-md rounded-br-md w-full py-2 px-4 text-secondary placeholder-secondary-content shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Password" />

                            </div>
                            <div className="h-4">
                                {errs?.password && <p className=" text-error font-light">{errs.password}</p>}
                            </div>
                        </div>
                        <button disabled={loading ? "disabled" : ""} onClick={handleSubmit} type="submit" className="w-full px-4 py-2 text-base font-semibold text-center rounded-md text-secondary-content transition duration-200 ease-in bg-secondary shadow-md hover:text-secondary hover:bg-secondary-content disabled:text-secondary disabled:bg-secondary-content focus:outline-none focus:ring-2">
                            <span className="w-full">
                                {loading ? "loading..." : "Submit"}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 flex justify-center h-screen bg-secondary">
                <div className="pt-12 pb-12 flex flex-col w-4/5 h-full justify-center text-center text-secondary-content">
                    <p className="text-3xl font-bold">
                        Welcome to my password validator
                    </p>

                    <p className="text-xl mt-2">
                        Go to the sign up page to use the password validator.
                    </p>
                    <div className="flex justify-center">
                        <img src={Img} className="w-1/3"></img>
                    </div>
                    <div>
                        <a href="/signup" className="btn w-40 font-semibold hover:bg-neutral-content hover:text-secondary-focus">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}