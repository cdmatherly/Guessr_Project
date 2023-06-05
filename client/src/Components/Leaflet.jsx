import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import "./leaflet.css"
import PlayerMarker from './PlayerMarker';
import ControlPanel from './ControlPanel';
import SubmitButton from './SubmitButton';
import { MapContainer, ImageOverlay, Marker, Tooltip, Polyline} from 'react-leaflet'
import { Icon } from 'leaflet'
import LocationReveal from './LocationReveal'
import { ForDevice, useMediaQuery } from 'media-query-react';


const Leaflet = (props) => {
    const { dispatch, gameState, setDistance, setPoints, setIsMounted, mapSize, setMapSize } = props;
    const mapElement = useRef();
    const [mapLevel, setMapLevel] = useState("tamriel")
    const [position, setPosition] = useState(null)
    const [map, setMap] = useState(null)
    const [zones, setZones] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const bounds = [[-10,-10], [10, 10]]
    const icon = new Icon({iconUrl: require("../static/maps/marker.webp"), iconSize:[32,32], iconAnchor:[16,33]})
    const isDesktop = useMediaQuery({query: 'min-width: 1024px'})

    const increaseMapSize = (e) => {
        setMapSize({})
    }

    const decreaseMapSize = (e) => {
        isDesktop? (!gameState.guess && (
            setMapSize({transform:"scale(0.5) translateZ(0px)", opacity:"0.5", transitionDelay:"250ms"})
        )):
        (!gameState.guess && (
            setMapSize({transform:"translateY(1000px)", opacity:"0.5"})
        ))
    }

    const changeLayer = (value) => {
        if (!gameState.guess){
            setMapLevel(value)
            setTimeout(() => {setPosition(null)}, 1)
        }
    }

    useEffect(() => {
        axios.get(`https://localhost:7078/api/guessr/zones`)
            .then((res) => {
                console.log(res.data)
                setZones(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleMouseEnter = (e) => {
        isDesktop && increaseMapSize(e)
    }

    const handleMouseLeave = (e) => {
        isDesktop && decreaseMapSize(e)
    }
    
    const findName = (layer) => {
        const name = zones.filter(zone => zone.shortName == mapLevel)
        return name[0].name
    }

    return (
        !isLoading && (
        <>
            <div className='absolute bottom-0 w-11/12 h-2/5 sm:w-1/4 sm:right-8 sm:bottom-6 sm:duration-200 duration-300 origin-bottom-right flex rounded-xl' style={{ ...mapSize}} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
                <div className='h-full w-full'>
                    <button className='bg-slate-700/90 text-yellow-400 p-2 rounded-2xl sm:hidden absolute left-1/2 -translate-x-1/2 -top-8 border border-yellow-600 w-20 flex justify-center' style={{zIndex:'500'}} onClick={(e) => decreaseMapSize(e)}>
                        <svg className='h-5' data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </button>
                    <ControlPanel changeLayer={changeLayer} setPosition={setPosition} zones={zones}></ControlPanel>
                    <MapContainer ref={mapElement} center={[0, 0]} zoom={5} maxZoom={9} minZoom={5} scrollWheelZoom={true} className='h-full w-full rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md shadow-gray-800 ' maxBounds={[[-12,-12], [12,12]]} maxBoundsViscosity={.5} zoomControl={true} attributionControl={false}>
                        <ImageOverlay url={require(`../static/maps/${mapLevel}.jpg`)} bounds={bounds}/>
                        {mapLevel == "tamriel" ?
                            <>
                                {zones.map((zone, idx) =>
                                <Marker key={idx} position={[zone.lat, zone.lng]} interactive={false} opacity={0}>
                                    <Tooltip direction='center' offset={[0,0]} permanent interactive={true}  className='bg-transparent' >
                                        <span onClick={(e) => changeLayer(zone.shortName)}  className='text-yellow-300 font-serif font-bold hover:text-yellow-200 ' id={zone.name}>{zone.name}</span>
                                    </Tooltip>
                                </Marker>
                                ) }
                            </> :
                            <PlayerMarker position={position} setPosition={setPosition} icon={icon} gameState={gameState} setMap={setMap}>
                        </PlayerMarker>
                            }
                            { gameState.guess && (
                                <>
                                { gameState.guess.zone === gameState.currentLocation.zone.shortName && (
                                    <Polyline positions={[[gameState.guess.position.lat, gameState.guess.position.lng], [gameState.currentLocation.lat, gameState.currentLocation.lng]]} color='#ffffff' dashArray={[1, 8]}/>
                                )}
                                    <LocationReveal dispatch={dispatch} gameState={gameState} icon={icon} setMapLevel={setMapLevel} mapLevel={mapLevel} setPosition={setPosition}/>
                                </>
                            )}
                    </MapContainer>
                    <div className='w-full leaflet-top leaflet-right'>
                        <div className='mx-auto w-40'>
                            <span className='block text-center text-xl mt-2 text-stroke'>{findName()}</span>
                        </div>
                    </div>
                    <SubmitButton position={position} mapLevel={mapLevel} dispatch={dispatch} gameState={gameState} map={map} setDistance={setDistance} setPoints={setPoints} setIsMounted={setIsMounted}></SubmitButton>
                </div>
            </div>
        </> )
    )
}

export default Leaflet;