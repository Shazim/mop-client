import { BASE_URL, API_PATH } from './config';
import { END_POINTS } from 'utils';
import { doGet, doPost } from './httpRequests';

const { COLORS, SIGN_IN, SIGN_UP, STYLES, ARTWORKS, GALLERIES } = END_POINTS;

export const createWork = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${ARTWORKS}`, data);
};

export const getArtWorks = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${ARTWORKS}${data ? data : ''}`);
};

export const getGalleries = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items/${GALLERIES}`);
};

export const signIn = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_IN}`, data);
};

export const signUp = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_UP}`, data);
};

export const getStyles = () => {
  return doGet(`${BASE_URL}${API_PATH}${STYLES}`);
};

export const getColors = () => {
  return doGet(`${BASE_URL}${API_PATH}${COLORS}`);
};
