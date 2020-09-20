import axios from "axios";

const instance = axios.create({
  baseURL: "https://europe-west1-clone-project-6bbe2.cloudfunctions.net/api",
});

export default instance;
