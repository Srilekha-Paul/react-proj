import axios from "axios";

const API = "http://localhost:8000/api/orders";

export const createOrder = async (orderData) => {
  const response = await axios.post(API, orderData);
  return response.data;
};

export const getOrder = async (trackingId) => {
  const response = await axios.get(`${API}/${trackingId}`);
  return response.data;
};