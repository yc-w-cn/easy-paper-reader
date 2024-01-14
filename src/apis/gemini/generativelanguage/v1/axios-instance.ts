import axios from "axios";
import { apiKeyLoader } from "@/apis/gemini/interceptors";

const axiosInstance = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1',
})

axiosInstance.interceptors.request.use(apiKeyLoader)

export default axiosInstance