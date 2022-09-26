import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
}

interface Props {
  children?: React.ReactNode
}
// El provider es el que va a tener el estado y se colocara en la parte mas alta de nuestra aplicacion
export const UIProvider:FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type: 'UI - Open sidebar'});
  }
  
  const closeSideMenu = () => {
    dispatch({type: 'UI - Close sidebar'})
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({type: 'UI - Set isAddingEntry', payload: isAdding})
  }

  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}>
      {children}
    </UIContext.Provider>
  )
}