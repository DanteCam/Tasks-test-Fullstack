import axios from "axios";

if (process.env.NODE_ENV === "development") {
  process.API_URL = "http://localhost:8000/";
} else if (process.env.NODE_ENV === "production") {
  process.API_URL = "http://localhost:8000/"; //Change for prod deploy
}

const myApi = axios.create({
  baseURL: process.API_URL,
});
export default myApi;
