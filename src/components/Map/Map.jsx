
import { Paper,Typography, useMediaQuery  } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { LocationOnOutlined } from '@material-ui/icons';
import useStyles from './styles'
import React, { useCallback, useRef } from 'react';
import { GoogleMap, useGoogleMap, useJsApiLoader } from '@react-google-maps/api';

const  Map =  ({setCoordinates, setBounds, coordinates,bounds,places, isLoading, weatherData}) => {
    const classes= useStyles();
    const mapRef= useRef(Map)
    const isDesktop= useMediaQuery('(min-width:600px)')
     const isloaded =  useJsApiLoader({
        googleMapsApiKey:'AIzaSyBLYAWKNXFfi-sbuvNhldYMNP6-_ql-xOo'
    })
    

    const onLoad = useCallback((mapInstance) => 
    {   mapRef.current=mapInstance
        
        const initBounds=mapRef.current.getBounds()
        
        console.log("initial bounds", bounds);
        console.log("mapRef", mapRef.current);

    },[])
    if (!isloaded) return <div>Loading..</div>
     
    return (
    <div className={classes.mapContainer}>
    <GoogleMap
    mapContainerClassName={classes.mapContainer}
    zoom={12}
    center={coordinates} 
    onIdle= {() => {
        const newbounds= mapRef.current.getBounds();
        
        setBounds({ne:{lat:newbounds.getNorthEast().lat().toString(),lng:newbounds.getNorthEast().lng().toString()},
         sw:{lat:newbounds.getSouthWest().lat().toString(),lng:newbounds.getSouthWest().lng().toString()}})
        
        }}
    margin={[50,50,50,50]}
    defaultZoom={14}
    options={''} 
    onLoad={onLoad} 
    
    // onCenterChanged={() => {
    //     const newcenter= mapRef.current.getCenter()
    //     setCoordinates({lat:newcenter.lat(), lng: newcenter.lng()})
    //     console.log("coordinates 2",coordinates);
     
    // }} 
    > 
    {!isLoading ? (
    places?.map((place,i) => (
        
        <div 
        className={classes.markerContainer}
        
        key={i}
        style={{ left:Math.floor(Math.random()), top:Math.floor(Math.random())}}
        >
           {!isDesktop
              ? <LocationOnOutlined color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  
                </Paper>
              )}
        </div>
))): <div></div>}
{
  weatherData?.list?.map((data,i) => (
    
    <div
    key={i}
    
    className={classes.weather}
    >
      <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
    </div>
  ))
}
     </GoogleMap>
    
     </div> 
    )
}

export default Map;