import React, { useEffect, useState } from "react"
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from './components/List/List'
import Map from "./components/Map/Map";
import placeDetails from './components/PlaceDetails/PlaceDetails'
import {getPlacesData} from './api'
import { useGoogleMap } from "@react-google-maps/api";


const App = () => {
        const [places,setPlaces]= useState([])
        const [coordinates, setCoordinates]= useState({})
        const [bounds, setBounds]= useState({ne:{lat:'33.564072359777626',lng:'73.15619010006544'},sw:{lat:'33.54096456823548',lng:'73.11319580761362'}})
        
        useEffect(() => {
            navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
                setCoordinates({lat:latitude,lng:longitude})           
            })
        },[])

        useEffect (() => {
            getPlacesData(bounds)
            .then((data) => {  
                
                    setPlaces(data)
                    console.log(data);
            })
        
        },[bounds])
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                bounds={bounds}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App;