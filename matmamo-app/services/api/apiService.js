import axios from "axios";

const API_KEY = "wDk19Tn1ieRnAIQFIZub2pBXdM8hV19HpROcHKSp";
const BASE_URL = "https://kassal.app/api/v1/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${API_KEY}` },
});

const apiCall = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while making an API call");
  }
};

export const fetchProducts = async () => {
  try {
    const data = await apiCall(BASE_URL + "products");
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Optionally, return a default value or throw an error to be handled by the caller
    throw new Error("Failed to fetch products");
  }
};

export const fetchSearchedProducts = async (term) => {
  const data = await apiCall(BASE_URL + `products?search=${term}`);

  return data;
};
