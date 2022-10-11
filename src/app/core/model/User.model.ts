export interface User {
  uid: string
  email: string
  emailVerified: boolean
  isAnonymous: boolean
  providerData: ProviderData[]
  stsTokenManager: StsTokenManager
  createdAt: number
  lastLoginAt:number
  apiKey: string,
  appName: string
}

export interface ProviderData {
  provider: string
  uid: string
  displayName?: string
  email: string,
  phoneNumber?: string
  photoURL?: string
}

export interface StsTokenManager {
  refreshToken: string
  accessToken: string
  expirationTime: number
}
