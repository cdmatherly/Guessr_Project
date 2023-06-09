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
        setMapSize({transform:"translateY(1000px)", opacity:"0.5"})
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
                //! Remove filters after adding DC zones
                setZones(res.data.filter(z => z.zoneId !== 8).filter(z => z.zoneId !== 7))
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
            <div className='absolute bottom-0 flex w-11/12 duration-300 origin-bottom-right h-2/5 sm:w-2/5 lg:w-1/4 sm:right-8 sm:bottom-6 sm:duration-200 rounded-xl' style={{ ...mapSize}} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
                <div className='w-full h-full'>
                    <button className='absolute flex justify-center w-20 p-2 text-yellow-400 -translate-x-1/2 border border-yellow-600 bg-slate-700/90 rounded-2xl sm:hidden left-1/2 -top-8' style={{zIndex:'500'}} onClick={(e) => decreaseMapSize(e)}>
                        <svg className='h-5' data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </button>
                    <ControlPanel changeLayer={changeLayer} setPosition={setPosition} zones={zones}></ControlPanel>
                    <MapContainer ref={mapElement} center={[0, 0]} zoom={5} maxZoom={9} minZoom={5} scrollWheelZoom={true} className='w-full h-full shadow-md rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-gray-800 ' maxBounds={[[-12,-12], [12,12]]} maxBoundsViscosity={.5} zoomControl={true} attributionControl={false}>
                        <ImageOverlay url={require(`../static/maps/${mapLevel}.jpg`)} bounds={bounds}/>
                        {mapLevel == "tamriel" ?
                            <>
                                {zones.map((zone, idx) =>
                                <Marker key={idx} position={[zone.lat, zone.lng]} interactive={false} opacity={0}>
                                    <Tooltip direction='center' offset={[0,0]} permanent interactive={true}  className='bg-transparent' >
                                        <span onClick={(e) => changeLayer(zone.shortName)}  className='font-serif font-bold text-yellow-300 hover:text-yellow-200 ' id={zone.name}>{zone.name}</span>
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
                        <div className='w-40 mx-auto'>
                            <span className='block mt-2 text-xl text-center text-stroke'>{findName()}</span>
                        </div>
                    </div>
                    <SubmitButton position={position} mapLevel={mapLevel} dispatch={dispatch} gameState={gameState} map={map} setDistance={setDistance} setPoints={setPoints} setIsMounted={setIsMounted}></SubmitButton>
                </div>
            </div>
        </> )
    )
}

export default Leaflet;