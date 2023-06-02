import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
    <nav className=" border-gray-200 bg-gray-900  top-0 w-full z-10 shadow-black/50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src={require('../static/favicon.webp')} className="h-8 mr-3 " alt="NirnGuessr Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Nirn<span className="bg-clip-text text-transparent bg-gradient-to-l to-yellow-500 from-yellow-700">Guessr</span></span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:hover:text-yellow-700 md:p-0 text-white md:hover:text-yellow-500" >Home</Link>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 text-white md:hover:text-yellow-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
            </ul>
            </div> */}
        </div>
    </nav>
    )
}

export default Navbar;