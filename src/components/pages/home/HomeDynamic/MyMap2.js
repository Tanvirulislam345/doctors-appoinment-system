import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Typography } from '@mui/material';
import specialist from '../../../../images/icons/specialist.png';
import DisplayReviews from './DisplayReviews';

const MyMap2 = () => {
    const containerStyle = {
        width: '100%',
        height: '284px'
    };

    const center = {
        lat: 23.791599,
        lng: 90.389099
    };

    return (
        <div>
            <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '59px', marginBottom: '12px' }}>
                Location
            </Typography>
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
            <Typography style={{ fontSize: '15px', fontWeight: '500', margin: 'auto', marginTop: '25px', marginBottom: '25px', maxWidth: '326px', textAlign: 'center' }}>
                519 8th Ave, Suite 811 (Between 35th and 36th St.), New York, NY 10018
            </Typography>
            <Typography style={{ backgroundColor: '#F0F0F0', padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={specialist} alt="" style={{ margin: '0px 20px', width: '16px', height: '19px' }} />
                Dr. Daniel Sherer, MD, FAAD also offers online video visits for patients
            </Typography>
            <DisplayReviews></DisplayReviews>
        </div>
    );
};

export default MyMap2;