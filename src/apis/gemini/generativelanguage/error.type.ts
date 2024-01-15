export type GeminiError = {
  error: {
    code: number
    message: string
    status: string
  }
}

export function isGeminiError(data: any): data is GeminiError {
  return (data as GeminiError).error !== undefined;
}