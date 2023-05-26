import { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    const [about, setAbout] = useState(false)
    
    return (
        // overflow-hidden not working -> added to leaflet.css
        <div className="flex flex-col gap-5 justify-center items-center h-screen ">
            <div className="h-screen w-full absolute top-0 -z-20" style={{backgroundImage:`url(${require(`../static/backgrounds/bg14.jpg`)}`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', filter:'grayscale(100%)' }}>
            </div>
            <div className="h-screen w-full absolute top-0 -z-10 bg-yellow-950/80 bg-">
            </div>
            <p className="text-center font-bold text-4xl text-stroke -mt-20">Start Playing</p>
            <Link to="/play" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-yellow-500 via-yellow-500 to-yellow-300 group-hover:from-yellow-200 group-hover:via-yellow-300 group-hover:to-yellow-300 text-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-yellow-400">
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                Play
            </span>
            
            </Link>
            <Link to="/info">
            <img src={require('../static/raven_icon.png')} alt="Raven icon" className={"h-20 absolute right-20 bottom-0 translate-y-12 hover:translate-y-0 duration-100"} />
            </Link>
            <div className="text-shadow shadow-black z-10 mb-2 md:absolute md:bottom-0 text-center w-full text-stone-400 text-sm font-myriad pointer-events-none font-sans font-semibold">THE ELDER SCROLLS ONLINE © 2014 - 2023 ZENIMAX MEDIA, INC. All Rights Reserved.</div>
        </div>

    )
}
export default Home;