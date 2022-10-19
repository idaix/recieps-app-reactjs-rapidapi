import axios from "axios";
// baseurl
const BASE_URL = 'https://yummly2.p.rapidapi.com'

const options = {
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RECIEP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

// fetch
export const fetchRecipes = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data
}