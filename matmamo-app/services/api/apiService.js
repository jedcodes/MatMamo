import axios from "axios";

const API_KEY = "wDk19Tn1ieRnAIQFIZub2pBXdM8hV19HpROcHKSp";

const apiCall = async (url, searchTerm) => {
  try {
    const options = {
      method: "GET",
      url,
      params: {
        search: searchTerm,
      },
      headers: { Authorization: `Bearer ${API_KEY}` },
    };
    const response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllProducts = async (term) => {
  const data = await apiCall(`https://kassal.app/api/v1/products/` + term);

  return data;
};
