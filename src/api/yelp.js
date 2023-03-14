import axios from "axios";
import {api_key} from "@env"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      `Bearer ${api_key}`,
  },
});
