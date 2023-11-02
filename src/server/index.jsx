
import axios from "axios";

  
  const  request = axios.create({
    baseURL:"https://650ba39ddfd73d1fab0a1a39.mockapi.io/products",
    timeout:10000,

  })
  export default request;