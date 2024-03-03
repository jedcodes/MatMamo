import axios from "axios";

const API_KEY = "wDk19Tn1ieRnAIQFIZub2pBXdM8hV19HpROcHKSp";
const BASE_URL = "https://kassal.app/api/v1/";
const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: { Authorization: `Bearer ${API_KEY}` },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllProducts = async (term) => {
  const data = await apiCall(BASE_URL + `products?search=${term}`);

  return data;
};
