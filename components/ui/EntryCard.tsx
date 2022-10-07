import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
import { Entry } from '../../interfaces';
import { FC, DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';

interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {

  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter()

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('text', entry._id);

    startDragging();
  }

  const onDragEnd = (e: DragEvent) => {
    endDragging();
  }

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      onClick={onClick}
      sx={{marginBottom: 1}}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace: 'pre-line'}} >{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
          <Typography variant='body2'>Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
