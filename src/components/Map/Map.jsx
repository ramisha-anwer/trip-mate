import { useGoogleMaps } from 'react-hook-google-maps';
import { Paper,Typography, useMediaQuery  } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { LocationOnOutlined } from '@material-ui/icons';
import useStyles from './styles'
import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const  Map =  ({setCoordinates, setBounds, coordinates}) => {
    
    const classes= useStyles();
    const isMobile= useMediaQuery('(min-width:600px)')
     const isloaded =  useJsApiLoader({
        googleMapsApiKey:'AIzaSyBLYAWKNXFfi-sbuvNhldYMNP6-_ql-xOo'
    })
    

    if (!isloaded) return <div>Loading..</div>
    
    return (
    <div className={classes.mapContainer}>
    <GoogleMap 
    mapContainerClassName={classes.mapContainer}
    zoom={12}
    center={coordinates} 
    margin={[50,50,50,50]}
    defaultZoom={14}
    options={''}
    // onDrag={(e) => {
    //     console.log(e);
    //     setCoordinates({lat:e.wb.x, lng: e.wb.y})
    //    // setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
    // }}
    onChange= {(e) => {
        console.log(e);
        setCoordinates({lat:e.center.lat, lng: e.center.lng})
        setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
    }}
    > 
     </GoogleMap>
        
     </div>
    )
}

export default Map;