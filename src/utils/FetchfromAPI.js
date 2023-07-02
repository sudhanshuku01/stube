import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 100,
  },
  headers:{
    'X-RapidAPI-Key': 'ecc90a9a5amsh95fd0d71abad895p15dc34jsnc4c1393e5086',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
