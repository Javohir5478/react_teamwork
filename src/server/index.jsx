
import axios from "axios";

  
  const  request = axios.create({
    baseURL:"https://api.escuelajs.co/api/v1/products",
    timeout:10000,

  })
  export default request;