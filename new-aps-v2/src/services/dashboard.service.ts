import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(`${API}/dashboard/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};