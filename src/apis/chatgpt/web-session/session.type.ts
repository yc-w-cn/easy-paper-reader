export type SessionType = {
  user: {
    id: string
    name: string
    email: string
    image: string
    picture: string
    idp: string
    iat: number
    mfa: boolean
    groups: any[]
    intercom_hash: string
  }
  expires: string
  accessToken: string
  authProvider: string
}
