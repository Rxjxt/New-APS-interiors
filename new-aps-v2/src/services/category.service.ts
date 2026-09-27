import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => localStorage.getItem("token");

export const getCategories = async () => {
  const { data } = await axios.get(`${API}/categories`);
  return data;
};

export const getCategoryById = async (id: string) => {
  const { data } = await axios.get(
    `${API}/categories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export const createCategory = async (
  payload: FormData
) => {
  const { data } = await axios.post(
    `${API}/categories`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

export const updateCategory = async (
  id: string,
  payload: FormData
) => {
  const { data } = await axios.put(
    `${API}/categories/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

export const deleteCategory = async (
  id: string
) => {
  const { data } = await axios.delete(
    `${API}/categories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};