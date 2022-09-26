import { UIState } from './';

type UIActionType = 
| {type: 'UI - Open sidebar' }
| {type: 'UI - Close sidebar' }
| {type: 'UI - Set isAddingEntry', payload: boolean}

// EL payload es la informacion requerida para retornar un nuevo estado
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  
  switch (action.type) {
    case 'UI - Open sidebar':
      return {
        ...state,
        sidemenuOpen: true
      }
    case 'UI - Close sidebar':
      return {
        ...state,
        sidemenuOpen: false
      }
    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }
    default:
      return state;
  }

}