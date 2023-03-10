import axios from "axios";
require('dotenv').config()

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      `Bearer ${process.env.REACT_APP_SECRET_NAME}`
  }),
});
