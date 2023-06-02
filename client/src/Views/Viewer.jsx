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

    useEffect(() => {
        axios.get(`https://localhost:7078/api/guessr/expansions/${1}/locations`)
            .then((res) => {
                // console.log(res)
                const locations = getRandomItems(res.data)
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

    const getRandomItems = (arr) => {
        const itemList = []
        while (itemList.length != 5){
            const rdmIdx = Math.floor(Math.random() * arr.length)
            let item = arr[rdmIdx]
            if (itemList.includes(item)) {
                continue
            } else {
                itemList.push(item)
            }
        }
        return itemList
    }

    const mountedStyle = { animation: "inAnimation 250ms cubic-bezier(0.950, 0.050, 0.795, 0.035)" };
    const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
    };

    return (
        <>
        {!isLoading && ( 
            <>
            <ReactPhotoSphereViewer keyboard="always" src={require(`../static/photospheres/${gameState.currentLocation.photosphereUrl}`)} height={'100vh'} width={'100%'} navbar={false} />
            {gameState.guess && showDiv && (
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center duration-150' style={ (gameState.guess && isMounted) ? mountedStyle: unmountedStyle }>
                    <div className='mx-auto w-1/4 bg-slate-500 h-fit flex flex-col items-center justify-around rounded-3xl shadow-lg shadow-black/50 bg-opacity-90 py-10 gap-3 text-center'>
                        {gameState.guess.zone === gameState.currentLocation.zone.shortName ? 
                        distance <= 20000 ?
                            <>
                                <span className='text-2xl font-semibold'>You got the exact location!</span>
                                <span className='text-3xl font-semibold flex items-center'><AnimatedNumber num={points} className={`text-3xl font-semibold`} />&nbsp;points</span>
                            </> :
                            <>
                                <span className='text-2xl font-semibold'>Your guess was {Math.floor(distance/120)} units away from the location.</span> 
                                <span className='text-3xl font-semibold flex items-center'><AnimatedNumber num={points} className={`text-3xl font-semibold`} />&nbsp;points</span>
                            </> :
                            <span className='text-2xl font-semibold'>Your guess was not in the correct zone.</span>
                        }
                        {/* <span className='block text-bold text-4xl w-full mx-auto text-center '>[{gameState.guess.position.lat}, {gameState.guess.position.lng}] Zone: {gameState.guess.zone}</span>
                        <span className='block text-bold text-4xl w-full mx-auto text-center '>[{gameState.currentLocation.lat}, {gameState.currentLocation.lng}] Zone: {gameState.currentLocation.zone}</span> */}
                        {gameState.locations.length > 0 ? 
                        <button onClick={() => { handleNext() } } className="bg-yellow-600 bg-opacity-80 px-2 py-1.5 rounded-xl shadow-md shadow-black/50 hover:scale-110 duration-150">Continue</button> :
                        <button onClick={() => { dispatch({type: 'gameOver'}) } } className="bg-yellow-600 opacity-100 px-2 py-1.5 rounded-xl shadow-md shadow-black/50 hover:scale-110 duration-150">Results</button>
                        }
                    </div>
                </div>
            )}
            <Leaflet dispatch={dispatch} gameState={gameState} setDistance={setDistance} setPoints={setPoints} setIsMounted={setIsMounted}></Leaflet>
            </>
            )}
        </>
    )
}
export default Viewer;