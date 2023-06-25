import { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

    const rdmSide = Math.floor(Math.random() * 2)
    const aboutIconPosition = rdmSide == 1 ? { left:`${Math.floor(Math.random() * 38)}rem` } : {right:`${Math.floor(Math.random() * 38)}rem`}
    
    return (
        // overflow-hidden not working -> added to leaflet.css
        <div className="flex flex-col items-center justify-center h-screen gap-5 ">
            <div className="absolute top-0 w-full h-screen -z-20" style={{backgroundImage:`url(${require(`../static/backgrounds/bg14.jpg`)}`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)' }}>
            </div>
            <div className="absolute top-0 w-full h-screen -z-10 bg-yellow-950/80 bg-">
            </div>
            <div className="-mt-20 text-4xl font-bold text-center cursor-default text-stroke">
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">S</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">t</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">a</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">r</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">t</span>
                <span> </span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">P</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">l</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">a</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">y</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">i</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">n</span>
                <span className="transition-all duration-100 ease-in-out hover:text-yellow-500">g</span>
            </div>
            <Link to="/play" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-yellow-600 to-yellow-500 group-hover:from-yellow-300 group-hover:via-yellow-400 group-hover:to-yellow-400 text-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-yellow-500">
            <span className="relative px-4 py-1.5 transition-all ease-in duration-150 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                Play
            </span>
            </Link>
            <Link to="/about">
            <img src={require('../static/raven_icon.webp')} alt="Raven icon" className={`h-20 z-20 absolute right-20 bottom-0 translate-y-12 hover:translate-y-0 duration-100 invisible sm:visible `}
            style={aboutIconPosition} />
            </Link>
            <div className="absolute px-4 py-2 overflow-y-auto border-2 border-double 3xl:py-3 right-10 bottom-14 sm:right-10 sm:bottom-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border-r-yellow-600 border-b-yellow-600 border-t-yellow-700 border-l-yellow-700 sm:w-1/5 sm:h-1/4 text-stone-300">
                <div className="lg:text-2xl 3xl:text-3xl">Dev Notes:</div>
                <hr className="mb-2" />
                <div className="lg:text-lg 3xl:text-2xl">Latest:</div>
                <div className="lg:text-md 3xl:text-xl">- Finished Dominion locations</div>
                <div className="lg:text-lg 3xl:text-2xl">Current:</div>
                <div className="lg:text-md 3xl:text-xl">- Add Covenant locations</div>
                <div className="lg:text-lg 3xl:text-2xl">To Do:</div>
                <div className="lg:text-md 3xl:text-xl">- Add Pact locations</div>
                <div className="lg:text-md 3xl:text-xl">- Move on to next chapters</div>
            </div>
            <div className="absolute bottom-0 z-10 w-full mb-2 font-sans text-sm font-semibold text-center pointer-events-none text-shadow shadow-black text-stone-400 font-myriad">THE ELDER SCROLLS ONLINE © 2014 - 2023 ZENIMAX MEDIA, INC. All Rights Reserved.</div>
        </div>

    )
}
export default Home;