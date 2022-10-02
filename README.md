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

## Llenar la base de datos con informacion de pruebas

llamar:
```
http://localhost:3000/api/seed
```