import ENV from './config';
import axios from './axios';

const { STAGE_BASE_URL } = ENV;

export function initCookie (obj) {
  const url = STAGE_BASE_URL + '/medical-supervision/system/initCookie';
  return axios.post(url, obj).then((res) => {
    return Promise.resolve(res);
  });
}

export function getUserInfo (obj) {
  const url = STAGE_BASE_URL + '/medical-supervision/supervisor/getUserInfo';
  return axios.post(url, obj).then((res) => {
    return Promise.resolve(res);
  });
}
