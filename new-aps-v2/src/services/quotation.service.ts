import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => localStorage.getItem("token");

const headers = () => ({
  Authorization: `Bearer ${getToken()}`,
});

export const getQuotations = async () => {
  const { data } = await axios.get(`${API}/quotations`, {
    headers: headers(),
  });

  return data;
};

export const getQuotationById = async (id: string) => {
  const { data } = await axios.get(
    `${API}/quotations/${id}`,
    {
      headers: headers(),
    }
  );

  return data;
};

export const updateQuotationStatus = async (
  id: string,
  status: string
) => {
  const { data } = await axios.put(
    `${API}/quotations/${id}/status`,
    { status },
    {
      headers: headers(),
    }
  );

  return data;
};

export const deleteQuotation = async (
  id: string
) => {
  const { data } = await axios.delete(
    `${API}/quotations/${id}`,
    {
      headers: headers(),
    }
  );

  return data;
};

export const exportQuotations = async () => {
  const response = await axios.get(
    `${API}/quotations/export`,
    {
      headers: headers(),
      responseType: "blob",
    }
  );

  const url = window.URL.createObjectURL(
    new Blob([response.data])
  );

  const link = document.createElement("a");

  link.href = url;
  link.download = `Quotations-${new Date()
    .toISOString()
    .slice(0, 10)}.xlsx`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
};

export const downloadQuotationPDF = async (
  id: string
) => {
  const response = await axios.get(
    `${API}/quotations/${id}/pdf`,
    {
      headers: headers(),
      responseType: "blob",
    }
  );

  const url = window.URL.createObjectURL(
    new Blob([response.data])
  );

  const link = document.createElement("a");

  link.href = url;
  link.download = `Quotation-${id}.pdf`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
};

export const prepareQuotation = async (
  id: string,
  payload: any
) => {
  const { data } = await axios.put(
    `${API}/quotations/${id}/prepare`,
    payload,
    {
      headers: headers(),
    }
  );

  return data;
};

// ✅ NEW
export const sendQuotation = async (
  id: string
) => {
  const { data } = await axios.put(
    `${API}/quotations/${id}/send`,
    {},
    {
      headers: headers(),
    }
  );

  return data;
};