
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  paper: {
    position: 'relative',
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', 
    
    transform: 'translate(50%, 50%)', 
    zIndex: 1, 
    '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
    height: "10vh", 
  },
  weather:{
    position: 'absolute',
    bottom: "50%",
    left: "50%",
    transform: 'translate(50%, 50%)', 
  }
})); 


