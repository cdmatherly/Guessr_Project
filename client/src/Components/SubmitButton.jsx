import { useMap } from "react-leaflet"
import L from 'leaflet'

const SubmitButton = (props) => {
    const { position, mapLevel, dispatch, gameState, map, setDistance, setPoints, setIsMounted } = props

    function handleGuess() {
        dispatch({type:"submitGuess", value: {position: position, zone: mapLevel} })
        const distance = map.distance([position.lat, position.lng], [gameState.currentLocation.lat, gameState.currentLocation.lng])
        if (mapLevel === gameState.currentLocation.zone) {
            if (distance <= 20000){
                dispatch({type: "setPoints", value: 100})
                setPoints(100)
                // console.log("You're in there!")
            } else {
                dispatch({type: "setPoints", value: 50})
                setPoints(50)
            }
        }
        setDistance(distance)
        // console.log(distance)
        setIsMounted(true)
    }

    return (
        <>
            <div className="leaflet-bottom leaflet-left w-full ">
                <div className="leaflet-control " id="customControl">
                    { mapLevel === "tamriel" ?
                    <div className="opacity-75 w-full">
                        <button className="border w-full overflow-hidden disabled border-x-zinc-600 border-y-zinc-500 text-zinc-100 text-sm 4k:text-2xl py-1.5 4k:py-3 tracking-wide px-8 font-semibold shadow-md shadow-[rgba(0,0,0,0.75)] rounded-full text-center cursor-default" style={{background:"rgb(240,182,87)", background: "linear-gradient(90deg, rgba(240,182,87,1) 0%, rgba(218,165,32,1) 100%)"}}>
                            <span>Pick a zone</span>
                        </button> 
                    </div> :
                    position? 
                    <div className=" w-full">
                        <button onClick={() => {handleGuess()} } className="border w-full overflow-hidden disabled border-x-zinc-600 border-y-zinc-500 text-slate-100 text-sm 4k:text-2xl py-1.5 4k:py-3 tracking-wide px-8 font-semibold shadow-md shadow-[rgba(0,0,0,0.75)] rounded-full text-center" style={{background:"rgb(240,182,87)", background: "linear-gradient(90deg, rgba(240,182,87,1) 0%, rgba(218,165,32,1) 100%)"}}>
                            <span>Submit Guess!</span>
                        </button> 
                    </div> :
                    <div className="opacity-75 w-full">
                        <button className="border w-full overflow-hidden disabled border-x-zinc-600 border-y-zinc-500 text-gray-100 text-sm 4k:text-2xl py-1.5 4k:py-3 tracking-wide px-8 font-semibold shadow-md shadow-[rgba(0,0,0,0.75)] rounded-full text-center cursor-default" style={{background:"rgb(240,182,87)", background: "linear-gradient(90deg, rgba(240,182,87,1) 0%, rgba(218,165,32,1) 100%)"}}>
                            <span>Place your pin on the map</span>
                        </button>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}
export default SubmitButton