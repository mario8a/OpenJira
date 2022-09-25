import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
// Estado
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Duis culpa laboris ipsum fugiat.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'In progress: Sit elit excepteur amet pariatur reprehenderit officia cillum culpa consectetur laboris irure ex.',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: 'Finished: Ea proident duis in qui aliquip.',
      status: 'finished',
      createdAt: Date.now() - 10000,
    }
  ],
}

interface Props {
  children?: React.ReactNode
}

export const EntriesProvider:FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{
      ...state
    }}>
      {children}
    </EntriesContext.Provider>
  )
}