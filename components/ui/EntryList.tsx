import { FC, useContext, useMemo} from 'react';
import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css';
interface Props {
  status: EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  // Usamos usememo para momorizar y evitar que react vuelva  a generar el filtro 
  // puede que tengamos muchas entradas y se vuelva un proceso pesado
  // useMemo es una funcion que se memoriza y lo hace cuando cambien las entradas
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) , [entries, status]);

  const onDropEntry = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');

    const entry = entries.find(entry => entry._id === id)!;
    // Modificando el status de la entrada
    entry.status = status;
    updateEntry(entry);
    endDragging();

  }

  const allowDrop  = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }


  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={ isDragging ? styles.dragging : '' }
    >
      <Paper sx={{height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px', '&::-webkit-scrollbar': { display: 'none' }}}>
        <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}>
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
