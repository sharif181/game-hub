import axios, { CanceledError } from "axios";

const apiKey = import.meta.env.VITE_API_RAWG_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export { CanceledError };
