import axios from "axios";

export const serverApi = axios.create({
  url: "http://localhost:9000",
});
