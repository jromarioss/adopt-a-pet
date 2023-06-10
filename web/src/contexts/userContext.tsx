/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios'
import { ReactNode, createContext, useState, useCallback, useEffect } from 'react'
import { decodeToken } from 'react-jwt'

import { api } from '../libs/axios'
import { useNavigate } from 'react-router-dom'

interface UserProps {
  id: string
  name: string
}

interface PayloadProps {
  user: UserProps
}

export interface UserContextProps {
  token: string
  tokenIsValid: boolean
  userInfo: UserProps | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  verifyIfHasAToken: () => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [token, setToken] = useState('')
  const [tokenIsValid, setTokenIsValid] = useState(false)
  const [userInfo, setUserInfo] = useState<UserProps | null>(null)
  
  const router = useNavigate()

  function getTokenPayload(token: string) {
    const decoded = decodeToken(token)
    return decoded ? decoded : null
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password })

      if (data.token) {
        setToken(data.token)

        localStorage.setItem('tokenAdoptAPet', data.token)
        setTokenIsValid(true)

        const payload = getTokenPayload(data.token) as PayloadProps
        setUserInfo(payload.user)

        router('/')
      }
    } catch(error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        setTokenIsValid(false)
        alert(error.response.data.message)
        return
      }
    }
  }

  async function signOut() {
    try {
      setToken('')
      localStorage.removeItem('tokenAdoptAPet')
      setUserInfo(null)
      setTokenIsValid(false)
    } catch(error) {
      console.log(error)
    }
  }

  const verifyIfHasAToken = useCallback(async () => {
    const hasToken = localStorage.getItem('tokenAdoptAPet')
    
    if (hasToken) {
      setToken(hasToken)

      const payload = getTokenPayload(hasToken) as PayloadProps
      setUserInfo(payload.user)
      setTokenIsValid(true)
    } else {
      signOut()
    }
  }, [])

  useEffect(() => {
    verifyIfHasAToken();
  }, [verifyIfHasAToken])

  return (
    <UserContext.Provider value={{
      tokenIsValid, token, userInfo, signIn, signOut, verifyIfHasAToken
    }}>
      {children}
    </UserContext.Provider>
  )
}