import type { NextPage } from 'next'
import { Grid, CardContent, Card, CardHeader } from '@mui/material'
import { Layout } from '../components/Layouts'
import { EntryList } from '../components/ui'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes" />

              {/* Agregar una nueva tarea */}
              {/* Agregar nuevas entradas */}
              <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completado" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
