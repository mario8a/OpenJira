import { createContext } from 'react';
import { Entry } from '../../interfaces';
// Esto es lo que el contexto expone a sus hijos
interface ContexrProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as ContexrProps);