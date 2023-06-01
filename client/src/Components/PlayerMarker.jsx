import {useState, useEffect} from 'react';
import { useMapEvents, Marker, useMap, LayersControl } from 'react-leaflet';
import { Icon, Circle } from 'leaflet';
import L from 'leaflet';



const PlayerMarker = (props) => {
    const { position, setPosition, icon, gameState, setMap } = props;
    const circle = new Circle([0,0])
    circle.setRadius(20000)
    
    const map = useMap();
    setMap(map)

    const mapEvents = useMapEvents({
        click(e) {
            if (!gameState.guess) {
                console.log(Object.values(e.latlng))
                setPosition(e.latlng)
                // console.log("Distance: " + map.distance([e.latlng.lat, e.latlng.lng], [gameState.currentLocation.lat, gameState.currentLocation.lng]))
            }
            // map.flyTo([0,0], 9)
            // map.addLayer(circle)
            // map.removeLayer(circle)
        }
    })
    
    const fly = () => {
    }

    
    return position === null ? null : (
        <Marker position={position} icon={icon} interactive={false}>
            {/* <Circle center={[0,0]} radius={20000} >You are here</Circle> */}
        </Marker>
    )
}
export default PlayerMarker;