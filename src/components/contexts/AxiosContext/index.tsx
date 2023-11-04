import React, { createContext, useContext } from 'react'
import { IContextWithChildren } from './interface'
import axios from 'axios'

const AxiosContext = createContext({})

export const useAxiosContext = () => useContext(AxiosContext)

export const AxiosProvider: React.FC<IContextWithChildren> = ({ children }) => {
  axios.defaults.baseURL = 'https://growbiz-api.fly.dev'
  // axios.defaults.headers['Content-Type'] = 'application/json'

  return <AxiosContext.Provider value={{}}>{children}</AxiosContext.Provider>
}
