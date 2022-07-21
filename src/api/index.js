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
  
  
export const getPlacesData = async(type,bounds) => {
    try{
      
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '72e3bdfc3emshe6e37f8af09f278p176585jsncc8f19b9bcd9',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        }) 
        return data
    } catch (error){
            console.log(error);
    }
}

export const getWeatherData = async (lat,lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: { lon: lng, lat: lat},
      headers: {
        'X-RapidAPI-Key': '72e3bdfc3emshe6e37f8af09f278p176585jsncc8f19b9bcd9',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    })
    return data
  } catch (error) {
    console.log(error);
  }
}

