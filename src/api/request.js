import axios from 'axios';
import {APP_ID} from '../constants/api';

export const API_CALL_GET = url => {
  let header = {headers: {'app-id': APP_ID}};
  return axios
    .get(url, header)
    .then(({data}) => data) // returns promise
    .catch(console.error);
};
