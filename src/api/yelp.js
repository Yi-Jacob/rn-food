import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XActiGD8argRSIFomkyHAZ5U_y25cbAo5cMu9G02hcPGrCMmtexVxJZFgSMfHcwb1NWQaL1Q78epduuVIJq7E1YcGLSBzvMzODgksYymyZispOc84EpseAZSCQkFZHYx",
  },
});
