'use client'

import { GoogleMap, Marker } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
    lat: -23.641612,
    lng: -46.537142
}

const defaultMapZoom = 18

const defaultMapOptions = {
    zoomCOntrol: true,
    tilt: 0,
    gestureHandling: 'Auto',
    mapTypeId: 'roadmap'
}

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap mapContainerStyle={defaultMapContainerStyle}
             center={defaultMapCenter}
             zoom={defaultMapZoom}
             options={defaultMapOptions}>

            <Marker position={defaultMapCenter}/>
            <Marker position={{ lat: -23.6528776, lng: -46.5378241 }}/>
            <Marker position={{ lat: -23.5278853, lng: -47.1364223}}/>

            </GoogleMap>
        </div>
    )
};

export { MapComponent };