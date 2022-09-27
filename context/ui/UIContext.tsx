import { createContext } from 'react'

interface ContexrProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDragging: () => void
  endDragging: () => void
}
// El contexto nos sirve para crear un provider
export const UIContext = createContext({} as ContexrProps);