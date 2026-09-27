import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const trackVisitor = async () => {
  try {
    await axios.post(`${API}/visitors/track`);
  } catch (error) {
    console.error(error);
  }
};