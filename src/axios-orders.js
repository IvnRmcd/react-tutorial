import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerbuilder-9e72f.firebaseio.com/",
});

export default instance;
