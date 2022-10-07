import React, { ChangeEvent, useMemo, useState } from 'react'
import { capitalize ,Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Layout } from '../../components/Layouts';
import { EntryStatus } from '../../interfaces';


const validStatus:EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(() => inputValue.length <=0 && touched ,[inputValue, touched]);
 
  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  }

  const onSubmit = () => {
    console.log('si???')
    console.log(({inputValue, status}));
  }

  return (
    <Layout>
      <Grid
        container
        justifyContent='center'
        sx={{marginTop: 2}}
      >
        <Grid item xs={12} sm={8} md={6} >
          <Card>
            <CardHeader title={`Entrada: ${inputValue}`} subheader={`Creada hace: .... min`} />

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
}

export default EntryPage