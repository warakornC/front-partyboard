import axios from "../config/axios";
import { getToken } from "../utils/local-storage";


export const merchantLogin = async (fromData) =>
  await axios.post("/merchant/login", fromData);


export const fetchMe = () =>
  axios.get("/user/me", {
    headers: { Authorization: `Bearer ${getToken}` },
  });
