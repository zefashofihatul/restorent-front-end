import CONFIG from './config';

const API_ENDPOINT = {
  GETALL: `${CONFIG.BASE_URL}list`,
  GETDETAIL: `${CONFIG.BASE_URL}detail`,
  SEARCH: `${CONFIG.BASE_URL}search?q=`,
  POSTREVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
