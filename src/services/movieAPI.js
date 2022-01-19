import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '973f836f86ee5af25313d0a8c5bc0a33',
  language: 'en',
  region: 'US'
}

export const queryRequest = (query, page) => {
  return axios.get(`/search/movie?query=${query}&page=${page}`);
};
export const popularRequest = () => {
  return axios.get(`/movie/top_rated`);
};
export const playingNowRequest = () => {
  return axios.get(`/movie/now_playing`);
};
export const upcomingRequest = () => {
  return axios.get(`/movie/upcoming`);
};
export const pageRequest = (id) => {
  return axios.get(`/movie/${id}`);
}
export const similarRequest = (id) => {
  return axios.get(`/movie/${id}/similar`);
}
export const videoRequest = (id) => {
  return axios.get(`/movie/${id}/videos`);
}
export const searchCountries = () => {
  return axios.get(`/configuration/countries`);
};
export const searchLang = () => {
  return axios.get(`/configuration/languages`);
};

export const changeAxiosRegion = (region) => {
  axios.defaults.params.region = region;
  localStorage.setItem('region', region);
};
export const changeAxiosLanguage = (lang) => {
  axios.defaults.params.language = lang;
  localStorage.setItem('language', lang);
};