import { createContext } from 'react'

interface ContexrProps {
  sidemenuOpen: boolean;
}
// El contexto nos sirve para crear un provider
export const UIContext = createContext({} as ContexrProps);