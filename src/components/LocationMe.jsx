import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext } from 'react';
import ThemesContext from '../context/themes';
// import smily from "../assets/images/smiling-face.png";

function LocationMe() {
    const { isDarkEnabled } = useContext(ThemesContext);
    const position = [30.7650759, 76.5160501];

    const customIcon = new L.DivIcon({
        className: 'icon-style',  // CSS class for styling the div icon
        html: `<div ></div>`,
        iconSize: [95, 95],  // Set size of the div icon
        iconAnchor: [47, 42],  // Anchor at the center
    });

    return (
        <div className="size-full overflow-hidden rounded-[30px] map-area bg-shadow
            h-[277px] w-[279px] max-lg:w-[179px] max-lg:h-[180px] max-md:w-[341px] max-md:h-[165px]"
        >
            <MapContainer
                center={position}
                zoom={7.2}
                style={{ width: '100%', height: '100%', borderRadius: "30px" }}
                zoomControl={false}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
            >
                <TileLayer
                    // url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                    // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                    // url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    // url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                    url={ isDarkEnabled  
                        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' 
                        : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' }    
                    
                />
                <Marker position={position} icon={customIcon}>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default LocationMe;