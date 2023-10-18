import { FilterMethods } from "@/@types/context";
import axios from "axios";

const apiRequest = axios.create({
  baseURL: '/api',
})

export const getAllProducts = async () => {
  const response = await apiRequest('/products');

  return response.data;
}

export const getProductsByTag = async (tag: FilterMethods) => {
  const response = await apiRequest(`/products/tags/${tag}`)

  return response.data;
}