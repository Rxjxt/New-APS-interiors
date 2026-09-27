import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const sendOTP = async (email: string) => {
  const { data } = await axios.post(
    `${API}/otp/send`,
    { email }
  );

  return data;
};

export const verifyOTP = async (
  email: string,
  otp: string
) => {
  const { data } = await axios.post(
    `${API}/otp/verify`,
    {
      email,
      otp,
    }
  );

  return data;
};