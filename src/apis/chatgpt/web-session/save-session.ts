import localforage from "localforage"

export async function saveSession(session: string){
  return localforage.setItem("chatgpt-session", session)
}