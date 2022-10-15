import axios from "axios";
const BASE_URL = 'https://yummly2.p.rapidapi.com/feeds'
const options = {
  url: BASE_URL,
  params: {limit: '24', start: '0'},
  headers: {
    'X-RapidAPI-Key': '9de00422ddmsh33753bb374ade60p1c3dc0jsn3c0dab29c812',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};


export const fetchRecieps = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data
}