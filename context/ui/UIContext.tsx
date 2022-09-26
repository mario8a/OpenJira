import { createContext } from 'react'

interface ContexrProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void
}
// El contexto nos sirve para crear un provider
export const UIContext = createContext({} as ContexrProps);