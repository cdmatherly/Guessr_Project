import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [isClosed, setIsClosed] = useState(true)

    return (
    <div className="relative">
        <nav className="relative top-0 z-10 w-full bg-gray-900 border-gray-200 shadow-lg shadow-black/50">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={require('../static/favicon.webp')} className="h-8 mr-3 -mb-1" alt="NirnGuessr Logo" />
                    <span className="self-center -mb-2 text-2xl font-semibold text-white whitespace-nowrap">Nirn<span className="-mb-2 text-transparent bg-clip-text bg-gradient-to-l to-yellow-400 from-yellow-600">Guessr</span></span>
                </Link>
                <button onClick={(e) => {setIsClosed(!isClosed)} } data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                
                {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-800 border border-gray-700 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
                <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:p-0 md:hover:text-yellow-500" >Home</Link>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:p-0 md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
                </ul>
            </div> */}
            </div>
        </nav>
        <div className={`w-full sm:hidden absolute duration-200 bottom-0 ` + (isClosed? ` -translate-y-48` : ` translate-y-10`)} id="navbar-solid-bg">
            <ul className="flex flex-col items-end mt-4 space-x-8 font-medium bg-transparent border-0 rounded-lg bg-gray-50 dark:bg-gray-800 dark:bg-transparent dark:border-gray-700">
                <li>
                <Link to="/about" className="inline-block p-0 py-2 pl-3 pr-4 text-white bg-transparent rounded bg-gradient-to-br from-slate-800 to-slate-900 " aria-current="page">About</Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;