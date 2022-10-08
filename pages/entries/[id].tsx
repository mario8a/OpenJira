import React, { ChangeEvent, FC, useContext, useMemo, useState } from 'react'
import { GetServerSideProps } from 'next';
import { capitalize ,Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Layout } from '../../components/Layouts';
import { Entry, EntryStatus } from '../../interfaces';
import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries';


const validStatus:EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  entry: Entry
}

const EntryPage:FC<Props> = ({entry}) => {

  const { updateEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(() => inputValue.length <=0 && touched ,[inputValue, touched]);
 
  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  }

  const onSubmit = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue
    }

    updateEntry(updatedEntry, true);
  }

  return (
    <Layout title={inputValue.substring(0,20) + '...'}>
      <Grid
        container
        justifyContent='center'
        sx={{marginTop: 2}}
      >
        <Grid item xs={12} sm={8} md={6} >
          <Card>
            <CardHeader title={`${inputValue}`} subheader={`Creada hace: ${entry.createdAt} min`} />

            <CardContent>
              <TextField
                sx={{marginTop: 2, marginBottom: 1}}
                fullWidth
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                value={inputValue}
                onChange={onInputValueChange}
                helperText={ isNotValid && 'Ingrese un valor'}
                onBlur={() => setTouched(true)}
                error={ isNotValid }
              />

              <FormControl>
                <FormLabel>Estado: </FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChange}
                >
                  {
                    validStatus.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSubmit}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: 'red',
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>

    </Layout>
  )
};


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// Esto solo corre del lado del servidor
// La pagina es renderzada bajo demanda del usuario
// ej: Si 1000 personas piden solicitud a esta pagina, se enviarian  1000 solicitudes D:
export const getServerSideProps: GetServerSideProps = async ({params}) => {

  const {id} = params as {id: string};
  
  const entry = await dbEntries.getEntryById(id);

  if( !entry ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }


  return {
    // Estas props son enviadas al componente
    props: {
      entry
    }
  }
}

export default EntryPage