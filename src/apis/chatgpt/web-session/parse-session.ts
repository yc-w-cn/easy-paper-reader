import { SessionType } from "./session.type"

export function parseSession(session: string){
  const sessionObject: SessionType = JSON.parse(session)
  return sessionObject
}