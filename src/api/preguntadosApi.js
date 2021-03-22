import axios from "axios";

const instance = axios.create({
  baseURL: "https://preguntados-moviles.herokuapp.com/",
});

export default instance;