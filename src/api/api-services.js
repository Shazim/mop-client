import { BASE_URL, API_PATH } from './config';
import { END_POINTS } from 'utils';
import { doGet, doPost } from './httpRequests';

const {
  COLORS,
  SIGN_IN,
  SIGN_UP,
  STYLES,
  ARTWORKS,
  GALLERIES,
  INSIGHTS,
  ARTISTS,
  EXHIBITIONS,
} = END_POINTS;

export const createWork = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${ARTWORKS}`, data);
};

export const createGallery = (data, id) => {
  return doPost(`${BASE_URL}${API_PATH}${GALLERIES}`, data);
};

export const getArtWorks = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${ARTWORKS}${data ? data : ''}`);
};

export const getBrowseArtworks = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${ARTWORKS}${data ? data : ''}`);
};

export const getGalleries = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${GALLERIES}${data}`);
};

export const getExhibitions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${EXHIBITIONS}${data}`);
};

export const getArtists = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${ARTISTS}${data}`);
};

export const getGalleryDetails = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${GALLERIES}/${data}`);
};

export const createInsight = (data) => {
  return doPost(`${BASE_URL}${API_PATH}/items${INSIGHTS}`, data);
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
