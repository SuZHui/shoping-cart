import axios from 'axios';

const API = {
  getProducts: function () {
    return axios.get(`${process.env.PUBLIC_URL}/api/product.json`);
  },
};

export default API;
