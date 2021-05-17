import axios from 'axios';

const ServerCall = ({method, url, data}) => {
  return axios({
    method: method,
    url: url,
    // data: data,
    data: method === 'post' ? data : null,
  });
};

export default ServerCall;
