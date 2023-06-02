import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [isClosed, setIsClosed] = useState(true)

    return (
    <div className="relative">
        <nav className=" border-gray-200 bg-gray-900  top-0 w-full z-10 shadow-black/50 shadow-lg relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src={require('../static/favicon.webp')} className="h-8 mr-3 " alt="NirnGuessr Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Nirn<span className="bg-clip-text text-transparent bg-gradient-to-l to-yellow-400 from-yellow-600">Guessr</span></span>
                </Link>
                <button onClick={(e) => {setIsClosed(!isClosed)} } data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                
                {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                <Link to="/" className="block py-2 pl-3 pr-4 bg-yellow-700 rounded md:bg-transparent md:p-0 text-white md:hover:text-yellow-500" >Home</Link>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
                </ul>
            </div> */}
            </div>
        </nav>
        <div className={`w-full sm:hidden absolute duration-200 bottom-0 ` + (isClosed? ` -translate-y-48` : ` translate-y-10`)} id="navbar-solid-bg">
            <ul className="flex flex-col items-end font-medium mt-4 rounded-lg bg-gray-50 space-x-8 border-0 bg-transparent dark:bg-gray-800 dark:bg-transparent dark:border-gray-700">
                <li>
                <Link to="/about" className="inline-block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 bg-gradient-to-br from-slate-800 to-slate-900 " aria-current="page">About</Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;