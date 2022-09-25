import { createContext } from 'react';
import { Entry } from '../../interfaces';
// Esto es lo que el contexto expone a sus hijos
interface ContexrProps {
  entries: Entry[];
}

export const EntriesContext = createContext({} as ContexrProps);