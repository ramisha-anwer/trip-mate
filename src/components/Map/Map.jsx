import GoogleMap from 'google-map-react'
import { Paper,Typography, useMediaQuery  } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { LocationOnOutlined } from '@material-ui/icons';
import useStyles from './styles'
const Map = () => {
    const classes= useStyles();
    const isMobile= useMediaQuery('(min-width:600px)')
    const coordinates = { lat:0, lng:0}
    return (
        <div className={classes.mapContainer}>
            {/* <GoogleMap
            //bootstrapURLKeys={{key:'AIzaSyBLYAWKNXFfi-sbuvNhldYMNP6-_ql-xOo'}}
            // defaultCenter={coordinates}
            // center={coordinates}
            // defaultZoom={14}
            // margin={[50,50,50,50]}
            // options={''}
            
            >

            </GoogleMap> */}
        </div>
    )
}

export default Map;