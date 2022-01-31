import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyMap = () => {

    const containerStyle = {
        width: '100%',
        minHeight: '100vh'
    };

    const center = {
        lat: 23.791599,
        lng: 90.389099
    };

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MyMap;