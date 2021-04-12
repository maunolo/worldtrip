import { createContext, useState, useContext, ReactNode } from 'react'
import { Continent } from '../types'

interface ContinentsContextData {
  continents: Continent[]
  setContinents: React.Dispatch<React.SetStateAction<Continent[]>>
}

interface ContinentsProviderProps {
  children: ReactNode
}

const ContinentsContext = createContext({} as ContinentsContextData)

export function ContinentsProvider({ children }: ContinentsProviderProps) {
  const [continents, setContinents] = useState<Continent[]>([])

  return (
    <ContinentsContext.Provider value={{ continents, setContinents }}>
      {children}
    </ContinentsContext.Provider>
  )
}

export function useContinents() {
  const context = useContext(ContinentsContext)

  return context
}
