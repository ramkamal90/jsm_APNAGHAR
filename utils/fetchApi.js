import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'e63a3f9f51msh59d9214461b2374p17aa9fjsn0808a4f64cb2',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
}
