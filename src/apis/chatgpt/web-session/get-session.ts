import localforage from "localforage"

export async function getSession(){
  return localforage.getItem<string>("chatgpt-session")
}