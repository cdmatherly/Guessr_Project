import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import Leaflet from "../Components/Leaflet";
import AnimatedNumber from '../Components/AnimatedNumber';

function useDelayUnmount(isMounted, delayTime) {
        const [showDiv, setShowDiv] = useState(false);
        useEffect(() => {
            let timeoutId;
            if (isMounted && !showDiv) {
            setShowDiv(true);
            } else if (!isMounted && showDiv) {
            timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
            }
            return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
        }, [isMounted, delayTime, showDiv]);
        return showDiv;
    }

const Viewer = (props) => {
    const { dispatch, gameState, isLoading, setIsLoading } = props;
    const [distance, setDistance] = useState(null)
    const [points, setPoints] = useState(0)
    const [isMounted, setIsMounted] = useState(false)
    const showDiv = useDelayUnmount(isMounted, 250)
    const [mapSize, setMapSize] = useState({})


    useEffect(() => {
        axios.get(`https://localhost:7078/api/guessr/expansions/`)
            .then((res) => {
                console.log(res)
                const selectedExpansions = res.data.filter(expansion => expansion.name == (gameState.includeBaseGame && `Base Game`) || expansion.name == (gameState.includeMorrowind && (`Morrowind`)) || expansion.name == (gameState.includeSummerset && ('Summerset')) )
                console.log(selectedExpansions)
                const locations = getRandomLocations(selectedExpansions)
                // console.log(locations)
                dispatch({type: "getLocations", value: locations})
                setIsLoading(false)
            })
            .catch((err) => {
                // console.log(err)
            })
    }, [])

    async function handleNext() {
        setIsMounted(false)
        setIsLoading(true)
        await dispatch({type: "nextLocation"})
        setIsLoading(false)
    }

    const getRandomLocations = (expansions) => {
        let arr = []
        for (const expansion of expansions){
            arr = arr.concat(expansion.locations)
        }
        // console.log(arr)
        const locationList = []
        while (locationList.length != 5){
            const rdmIdx = Math.floor(Math.random() * arr.length)
            let location = arr[rdmIdx]
            if (locationList.includes(location)) {
                continue
            } else {
                locationList.push(location)
            }
        }
        return locationList
    }

    const mountedStyle = { animation: "inAnimation 250ms cubic-bezier(0.950, 0.050, 0.795, 0.035)" };
    const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
    };

    return (
        <>
        {!isLoading && ( 
            <div className='flex justify-center w-full'>
                <ReactPhotoSphereViewer keyboard="always" src={require(`../static/photospheres/${gameState.currentLocation.photosphereUrl}`)} height={'100vh'} width={'100%'} navbar={false} />
                {gameState.guess && showDiv && (
                    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full duration-150' style={ (gameState.guess && isMounted) ? mountedStyle: unmountedStyle }>
                        <div className='flex flex-col items-center justify-around w-2/3 gap-3 px-3 py-10 mx-auto text-center shadow-lg sm:w-1/4 bg-slate-500 h-fit rounded-3xl shadow-black/50 bg-opacity-90'>
                            {gameState.guess.zone === gameState.currentLocation.zone.shortName ? 
                            distance <= 20000 ?
                                <>
                                    <span className='text-2xl font-semibold'>You got the exact location!</span>
                                    <span className='flex items-center text-3xl font-semibold'><AnimatedNumber num={points} className={`text-3xl font-semibold`} />&nbsp;points</span>
                                </> :
                                <>
                                    <span className='text-2xl font-semibold'>Your guess was {Math.floor(distance/120)} units away from the location.</span> 
                                    <span className='flex items-center text-3xl font-semibold'><AnimatedNumber num={points} className={`text-3xl font-semibold`} />&nbsp;points</span>
                                </> :
                                <span className='text-2xl font-semibold'>Your guess was not in the correct zone.</span>
                            }
                            {/* <span className='block w-full mx-auto text-4xl text-center text-bold '>[{gameState.guess.position.lat}, {gameState.guess.position.lng}] Zone: {gameState.guess.zone}</span>
                            <span className='block w-full mx-auto text-4xl text-center text-bold '>[{gameState.currentLocation.lat}, {gameState.currentLocation.lng}] Zone: {gameState.currentLocation.zone}</span> */}
                            {gameState.locations.length > 0 ? 
                            <button onClick={() => { handleNext() } } className="bg-yellow-600 bg-opacity-80 px-2 py-1.5 rounded-xl shadow-md shadow-black/50 hover:scale-110 duration-150">Continue</button> :
                            <button onClick={() => { dispatch({type: 'gameOver'}) } } className="bg-yellow-600 opacity-100 px-2 py-1.5 rounded-xl shadow-md shadow-black/50 hover:scale-110 duration-150">Results</button>
                            }
                        </div>
                    </div>
                )}
                <button className='absolute flex items-center justify-center w-20 h-20 rounded-full shadow-md bottom-4 right-4 sm:hidden bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-black/50' onClick={() => {setMapSize({})} }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 bi bi-map-fill text-slate-800" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                    </svg></button>
                <Leaflet dispatch={dispatch} gameState={gameState} setDistance={setDistance} setPoints={setPoints} setIsMounted={setIsMounted} mapSize={mapSize} setMapSize={setMapSize}></Leaflet>
            </div>
            )}
        </>
    )
}
export default Viewer;