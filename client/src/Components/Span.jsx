import { useMapEvents } from "react-leaflet"

const Span = (props) => {
    const { className, province, setMapLevel, mapElement } = props

    
    function HandleLayerChange() {
        setMapLevel(province.layer)
        
        useMapEvents({
            zoomReset(e) {
                mapElement.fitWorld()
            }
        })
        return null;
    }



    return (
        <span onClick={() => HandleLayerChange()} className={className}>{province.name}</span>
    )
}
export default Span