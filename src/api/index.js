import axios from 'axios'

const API = {
  getProducts :() => axios.get('/api/product.json')
}

export default API
