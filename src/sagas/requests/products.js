import axios from 'axios';

export function getProducts() {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/priyadb/demo/products',
  });
}
