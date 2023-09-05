import axios from "./custom-axios"

//get limit product
const fetchAllProduct = () => {
  return axios.get(`/products`)
}

//Get a single product
const fetchDetailProduct = (id) => {
  return axios.get(`/products/${id}`)
}

//Get all categories
const fetchAllCategories = () => {
  return axios.get(`/products/categories`)
}

// //Get products in a specific category
// const fetchLimitCategories = (name) => {
//   return axios.get(`/products/categories/${name}`)
// }
export { fetchAllProduct, fetchDetailProduct, fetchAllCategories }  