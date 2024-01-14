import localforage from "localforage"

export async function getApiKey(){
  return localforage.getItem<string>("gemeni-api-key")
}

export async function setApiKey(key: string){
  return localforage.setItem<string>("gemeni-api-key", key)
}