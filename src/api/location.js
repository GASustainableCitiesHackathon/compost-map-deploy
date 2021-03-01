import apiUrl from "../apiConfig";
import axios from "axios";

export const index = (borough) => {
  return axios({
    method: "GET",
    url: apiUrl + "/locations/" + borough,
  });
};

export const patchWeight = (location, weight, user) => {
  return axios({
    method: "PATCH",
    url: apiUrl + "/locations/" + location._id,
    data: { weight, user },
  });
};
