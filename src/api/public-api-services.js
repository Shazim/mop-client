import { END_POINTS } from 'utils';
import { doGet, doPost, doPut } from './httpRequests';
import { BASE_URL, API_PATH } from './config';

const { EXHIBITIONS, PACKAGES, GALLERYMOCK } = END_POINTS;

export const getPublicExhibitions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${EXHIBITIONS}${data}`);
};

export const getPackages = () => {
  return doGet(`${BASE_URL}${API_PATH}/items${PACKAGES}`);
};

export const galleryMock = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${GALLERYMOCK}${data}`);
};
