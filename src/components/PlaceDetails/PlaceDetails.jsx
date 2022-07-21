import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Call} from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles'
 
const PlaceDetails = ({place}) => {
const classes= useStyles();
if (place.name) {
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height:350}}
            image={place.photo? place.photo.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box className={classes.subtitle}>
                    <Rating value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
                </Box> 
                <Box className={classes.subtitle}>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level? place.price_level : '$'}</Typography>
                </Box> 
                
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size='small' label={name} className={classes.chip}/>
                ))}
                {place?.address && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
                        <Call/> {place.phone}
                    </Typography>
                )}

                {place?.web_url && (
                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(place.web_url,'_blank')}>
                        Trip Advisor
                    </Button>
                
                    <Button size='small' color='primary' onClick={() => window.open(place.website,'_blank')}>
                        Website
                    </Button>
                </CardActions>
                )}
            </CardContent>
        </Card>
    )
}} 
export default PlaceDetails;