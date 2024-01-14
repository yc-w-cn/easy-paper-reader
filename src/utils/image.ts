import axios from "axios"

export function downloadImageToBase64(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    axios
      .get(imageUrl, { responseType: "arraybuffer" })
      .then((response) => {
        const arrayBuffer = response.data;
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64 = btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));
        const dataUri = `data:${response.headers['content-type']};base64,${base64}`;
        resolve(dataUri);
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}
