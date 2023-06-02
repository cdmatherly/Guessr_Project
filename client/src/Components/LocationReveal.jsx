import { useEffect } from "react";
import { Marker, Circle, useMapEvents, useMap } from "react-leaflet"
import L from 'leaflet'

const LocationReveal = (props) => {
    const { dispatch, gameState, icon, setMapLevel, mapLevel, setPosition } = props;
    const map = useMap();

    useEffect(() => {
        if (mapLevel !== gameState.currentLocation.zone.shortName) {
            setMapLevel(gameState.currentLocation.zone.shortName)
            setTimeout(() => {setPosition(null)}, 1)
        }
        map.flyTo([gameState.currentLocation.lat, gameState.currentLocation.lng], 9)
    }, [])

    return (
        <>
            <Marker position={[gameState.currentLocation.lat, gameState.currentLocation.lng]} icon={icon}></Marker>
            <Circle center={[gameState.currentLocation.lat, gameState.currentLocation.lng]} radius={20000}></Circle>
        </>
    )
}
export default LocationReveal;