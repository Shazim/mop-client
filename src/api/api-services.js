import { BASE_URL, API_PATH } from './config';
import { END_POINTS } from 'utils';
import { doGet, doPost, doPut } from './httpRequests';

const {
  COLORS,
  SIGN_IN,
  SIGN_UP,
  STYLES,
  ARTWORKS,
  GALLERIES,
  INSIGHTS,
  ARTISTS,
  GALLERY,
  EXHIBITIONS,
  FEATURES,
  PROFILE,
  EXHIBITION_STYLES,
  SUBSCRIPTION,
  PRICE_SHEETS,
  GET_PRICING_DATA,
  ORDERS,
  FAQS,
  SETTINGS,
  CURRENCIES,
} = END_POINTS;

export const featureArtwork = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${FEATURES}`);
};

export const createPriceSheet = (data) => {
  return doPost(`${BASE_URL}${API_PATH}/${PRICE_SHEETS}`, data);
};
export const createOrder = (data) => {
  return doPost(`${BASE_URL}${API_PATH}/${ORDERS}`, data);
};
export const priceSheet = () => {
  return doGet(`${BASE_URL}${API_PATH}${PRICE_SHEETS}${GET_PRICING_DATA}`);
};
export const artistSetting = () => {
  return doGet(`${BASE_URL}${API_PATH}${SETTINGS}`);
};
export const updateArtistSetting = (id, data) => {
  return doPost(`${BASE_URL}${API_PATH}${SETTINGS}/:${id}`, data);
};

export const priceSheetDetail = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${PRICE_SHEETS}/${data}`);
};

export const editPriceSheet = (id, data) => {
  return doPut(`${BASE_URL}${API_PATH}${PRICE_SHEETS}/${id}`, data);
};
export const PriceSheetCollection = () => {
  return doGet(`${BASE_URL}${API_PATH}${PRICE_SHEETS}`);
};

export const createWork = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${ARTWORKS}`, data);
};
export const updateWork = (id, data) => {
  return doPost(`${BASE_URL}${API_PATH}${ARTWORKS}/${id}`, data);
};

export const createGallery = (data) => {
  return doPut(`${BASE_URL}${API_PATH}${GALLERY}`, data);
};

export const getGallery = () => {
  return doGet(`${BASE_URL}${API_PATH}${GALLERY}`);
};

export const getArtWorks = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${ARTWORKS}${data ? data : ''}`);
};

export const getExhibitionStyles = () => {
  return doGet(`${BASE_URL}${API_PATH}${EXHIBITION_STYLES}`);
};
export const getCurrency = () => {
  return doGet(`${BASE_URL}${API_PATH}${CURRENCIES}`);
};
export const getPublicArtWork = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${ARTWORKS}/${data}`);
};
export const getStock = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${ARTWORKS}/${data}`);
};

export const getBrowseArtworks = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${ARTWORKS}?${data}`);
};
export const getPublicColors = () => {
  return doGet(`${BASE_URL}${API_PATH}/items${COLORS}`);
};
export const getPublicStyles = () => {
  return doGet(`${BASE_URL}${API_PATH}/items${STYLES}`);
};
export const getGalleries = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${GALLERIES}${data}`);
};

export const getExhibitions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/${EXHIBITIONS}?${data}`);
};
export const getSingleExhibition = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/${EXHIBITIONS}/${data}`);
};

export const createExhibitions = (data) => {
  return doPost(`${BASE_URL}${API_PATH}/${EXHIBITIONS}`, data);
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

export const subscription = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SUBSCRIPTION}`, data);
};

export const getProfile = () => {
  return doGet(`${BASE_URL}${API_PATH}${PROFILE}`);
};

export const updateProfile = (data) => {
  return doPut(`${BASE_URL}${API_PATH}${PROFILE}`, data);
};

export const getStyles = () => {
  return doGet(`${BASE_URL}${API_PATH}${STYLES}`);
};

export const getColors = () => {
  return doGet(`${BASE_URL}${API_PATH}${COLORS}`);
};
export const getFaqs = () => {
  return doGet(`${BASE_URL}${API_PATH}/items${FAQS}`);
};
