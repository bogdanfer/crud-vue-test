import axios from "axios";

export default axios.create({
  baseURL: "https://api-rtf.niculae.net/v1",
  headers: {
    "Content-type": "application/json"
  }
});
