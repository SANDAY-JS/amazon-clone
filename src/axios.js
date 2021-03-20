import axios from "axios";

const instance = axios.create({
  // The API URL
  baseURL: "https://us-central1-clone-bc279.cloudfunctions.net/api",
});

export default instance;
//http://localhost:5001/clone-bc279/us-central1/api
