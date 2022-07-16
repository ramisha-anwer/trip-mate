import axios from "axios";
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    
    params: {
      bl_latitude: '33.54096456823548',
      tr_latitude: '33.564072359777626',
      bl_longitude: '73.11319580761362',
      tr_longitude: '73.15619010006544',
      
    },
    headers: {
      'X-RapidAPI-Key': '3d9d0f548emsh2270349972d1b20p19f279jsn4977724dc2be',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  
export const getPlacesData = async() => {
    try{
        const {data : {data}} = await axios.get(URL,options) 
        return data
    } catch (error){
            console.log(error);
    }
}