import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerreact-6928e.firebaseio.com/",
});

export default instance;
