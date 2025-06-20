import axios from 'axios'
const BASE_URL = 'https://api.jikan.moe/v4'

export const fetch = async (url) => {
  const request = await axios.get(`${BASE_URL}/${url}`);

  return request.data;
};