import { END_POINTS } from 'utils';
import { doGet, doPost, doPut } from './httpRequests';
import { BASE_URL, API_PATH } from './config';

const { EXHIBITIONS, PACKAGES, GALLERYMOCK, ARTWORKS_PRICE } = END_POINTS;

export const getPublicExhibitions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${EXHIBITIONS}${data}`);
};
export const getPublicArtworkPrice = (data) => {
  return doGet(
    `${BASE_URL}${API_PATH}/items/artworks${ARTWORKS_PRICE}?${data}`
  );
};
export const getPackages = () => {
  return doGet(`${BASE_URL}${API_PATH}/items${PACKAGES}`);
};

export const galleryMock = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${GALLERYMOCK}${data}`);
};
