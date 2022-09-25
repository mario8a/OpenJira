import { FC, useContext, useMemo} from 'react';
import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';
interface Props {
  status: EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

  const { entries } = useContext(EntriesContext);

  // Usamos usememo para momorizar y evitar que react vuelva  a generar el filtro 
  // puede que tengamos muchas entradas y se vuelva un proceso pesado
  // useMemo es una funcion que se memoriza y lo hace cuando cambien las entradas
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) , [entries]);


  return (
    <div>
      <Paper sx={{height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px', '&::-webkit-scrollbar': { display: 'none' }}}>
        <List sx={{opacity: 1}}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
