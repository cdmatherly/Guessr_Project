import { useState, useRef } from 'react';
import "leaflet/dist/leaflet.css";
import "./leaflet.css"
import PlayerMarker from './PlayerMarker';
import ControlPanel from './ControlPanel';
import SubmitButton from './SubmitButton';
import { MapContainer, ImageOverlay, Marker, Tooltip, Polyline} from 'react-leaflet'
import { Icon } from 'leaflet'
import LocationReveal from './LocationReveal'


const Leaflet = (props) => {
    const { dispatch, gameState, setDistance, setPoints, setIsMounted } = props;
    const mapElement = useRef();
    const [mapSize, setMapSize] = useState({})
    const [mapLevel, setMapLevel] = useState("tamriel")
    const [position, setPosition] = useState(null)
    const [map, setMap] = useState(null)
    const bounds = [[-10,-10], [10, 10]]
    const icon = new Icon({iconUrl: require("../static/maps/marker.webp"), iconSize:[32,32], iconAnchor:[16,33]})

    const increaseMapSize = (e) => {
        setMapSize({})
    }
    const decreaseMapSize = (e) => {
        !gameState.guess && (
            setMapSize({transform:"scale(0.5) translateZ(0px)", opacity:"0.5", transitionDelay:"175ms"})
        )
    }

    const changeLayer = (value) => {
        if (!gameState.guess){
            setMapLevel(value)
            setTimeout(() => {setPosition(null)}, 1)
        }
    }

    const provinces = [
        {
            name: "Tamriel",
            coordinates: [-100, -100],
            layer: "tamriel"
        },
        {
            name: 'Auridon',
            coordinates: [-3.75,-5.75],
            layer: 'auridon'
        },
        {
            name: 'Grahtwood',
            coordinates: [-4.75,-2],
            layer: 'grahtwood'
        },
        {
            name: 'Greenshade',
            coordinates: [-4.5,-3.8],
            layer: 'greenshade'
        },
        {
            name: "Malabal Tor",
            coordinates: [-3.25, -2.55],
            layer: "malabaltor"
        },
    ] 
    
    const findName = (layer) => {
        const name = provinces.filter(province => province.layer == mapLevel)
        console.log(name[0].name)
        return name[0].name
    }

    return (
        <>
            <div className='absolute right-8 bottom-6 duration-200 origin-bottom-right flex rounded-xl' style={{ ...mapSize}} onMouseEnter={(e) => increaseMapSize(e)} onMouseLeave={(e) => decreaseMapSize(e)}>
                <div style={{height:"30rem", width:"30rem"}}>
                    <ControlPanel changeLayer={changeLayer} setPosition={setPosition} provinces={provinces}></ControlPanel>
                    <MapContainer ref={mapElement} center={[0, 0]} zoom={5} maxZoom={9} minZoom={5} scrollWheelZoom={true} className='h-full w-full rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md shadow-gray-800 bg-transparent' maxBounds={[[-12,-12], [12,12]]} maxBoundsViscosity={.5} zoomControl={true} attributionControl={false}>
                        <ImageOverlay url={require(`../static/maps/${mapLevel}.jpg`)} bounds={bounds}/>
                        {mapLevel == "tamriel" ?
                            <>
                                {provinces.map((province, idx) =>
                                <Marker key={idx} position={province.coordinates} interactive={false} opacity={0}>
                                    <Tooltip direction='center' offset={[0,0]} permanent interactive={true}  className='bg-transparent' >
                                        <span onClick={(e) => changeLayer(province.layer)}  className='text-yellow-300 font-serif font-bold hover:text-yellow-200 ' id={province.name}>{province.name}</span>
                                    </Tooltip>
                                </Marker>
                                ) }
                            </> : <PlayerMarker position={position} setPosition={setPosition} icon={icon} gameState={gameState} setMap={setMap}>
                        </PlayerMarker>
                            }
                            { gameState.guess && (
                                <>
                                { gameState.guess.zone === gameState.currentLocation.zone && (
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
        </> 
    )
}

export default Leaflet;