import axios from "axios";
import { apiKeyLoader } from "@/apis/gemini/interceptors";

export const axiosInstance = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta'
})

axiosInstance.interceptors.request.use(apiKeyLoader)

export default axiosInstance