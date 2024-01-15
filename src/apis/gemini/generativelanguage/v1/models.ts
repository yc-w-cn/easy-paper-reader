import { GeminiError } from "../error.type"
import axiosInstance from "./axios-instance"
import generativelanguage from "./types"

type RequestParamsType = generativelanguage.models.IListParams

type ResponseDataType = generativelanguage.IListModelsResponse | GeminiError

export async function getModels(params: RequestParamsType = {}) {
  const response = await axiosInstance.get<ResponseDataType>("/models", {
    params,
  })
  return response.data
}
