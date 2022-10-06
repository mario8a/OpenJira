# Next.js Open Jira App
Para correr localmente. se necesita la base da datos
```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB URL Local:
```
mongodb://localhost:27017
```


## Configurar las variables de entorno
Renombrar el archivo __.env.example__ a __.env__

# Reconstruir los modulos de node
```
yarn install
yarn dev
```

## Llenar la base de datos con informacion de pruebas

llamar:
```
http://localhost:3000/api/seed
```