import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
}

interface Props {
  children?: React.ReactNode
}
// El provider es el que va a tener el estado y se colocara en la parte mas alta de nuestra aplicacion
export const UIProvider:FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
      sidemenuOpen: false
    }}>
      {children}
    </UIContext.Provider>
  )
}