import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => localStorage.getItem("token");

export const getProducts = async () => {
  const { data } = await axios.get(`${API}/products`);
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axios.get(`${API}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const createProduct = async (formData: FormData) => {
  const { data } = await axios.post(
    `${API}/products`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

export const updateProduct = async (
  id: string,
  formData: FormData
) => {
  const { data } = await axios.put(
    `${API}/products/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await axios.delete(
    `${API}/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};