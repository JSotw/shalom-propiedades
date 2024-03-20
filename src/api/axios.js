import axios from "axios";

const instance = axios.create({
  baseURL: `https://shalom-propiedades-servidor.onrender.com/api`,
  withCredentials: true
})

export default instance;