import React, { useEffect, useState } from "react"
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from './components/List/List'
import Map from "./components/Map/Map";
import placeDetails from './components/PlaceDetails/PlaceDetails'
import { getPlacesData } from './api'
import { useGoogleMap } from "@react-google-maps/api";
import { getWeatherData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([])
    const [weatherData, setWeatherData] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])
    
    const [coordinates, setCoordinates] = useState({lat:40.793269090467405, lng:-74.02160794314477})
    const [bounds, setBounds] = useState({ ne: {lat: '40.8516639182373', lng: '-73.8056163889467' }, sw:  { lat: '40.66910995101048', lng: '-74.13829611842189' } })
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log(latitude, longitude);
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])

    useEffect(() => {
        const filteredPlaces=places.filter((place) => place.rating>rating)
        setFilteredPlaces(filteredPlaces)
    },[rating])

    useEffect(() => {
        setIsLoading(true)
        getWeatherData(coordinates.lat,coordinates.lng)
        .then((data) => {
            setWeatherData(data)
        })
        getPlacesData(type,bounds)
            .then((data) => {
                
                setPlaces(data.filter((place) => place.name))
                setFilteredPlaces([])
                setIsLoading(false)
            })

    }, [type,bounds,coordinates])
    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                    places={filteredPlaces.length? filteredPlaces: places}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                     />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        weatherData={weatherData}
                        bounds={bounds}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length? filteredPlaces: places}
                        isLoading={isLoading}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;