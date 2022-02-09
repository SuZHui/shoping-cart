import axios from 'axios'

const API = {
  getProducts :() => axios.get(`${process.env.PUBLIC_URL}/api/product.json`)
}

export default API
