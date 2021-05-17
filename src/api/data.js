import request from '../api/request';
import {POST_URL} from '../constants/api';

export async function getData(params) {
  return request.authCall({
    url: POST_URL,
    method: 'GET',
    data: params,
  });
}
export async function login(req) {
  return request.authCall({
    url: POST_URL,
    method: 'POST',
    data: req,
  });
}
