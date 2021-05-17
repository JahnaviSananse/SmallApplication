import axios from 'axios';
import {BASE_URL} from '../constants/api';
class Request {
  // public axios: AxiosInstance;
  //   api;
  isConnected = false;
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 100000,
    });
  }

  async authCall(config) {
    try {
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const res = await this.api.request({
        headers,
        ...config,
      });
      return res.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
}

export default new Request();
