import React, { createContext, useContext, useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { Jwt, User } from './interface'

export const useAuthContext = () => useContext(AuthContext)

export const AuthContext = createContext<any>({
  jwt: null,
  setJwt: () => {},
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [jwt, setJwt] = useState<Jwt | null | undefined>()
  const [user, setUser] = useState<User | null | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = JSON.parse(secureLocalStorage.getItem('token') as string)
    setJwt(token)
    const sessionUser = JSON.parse(secureLocalStorage.getItem('user') as string)
    setUser(sessionUser)
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ jwt, setJwt, user, setUser, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}
