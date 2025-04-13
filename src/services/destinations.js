import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Destinations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error.message);
    return [];
  }
};
