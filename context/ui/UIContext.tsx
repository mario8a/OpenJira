import { createContext } from 'react'

interface ContexrProps {
  sidemenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}
// El contexto nos sirve para crear un provider
export const UIContext = createContext({} as ContexrProps);