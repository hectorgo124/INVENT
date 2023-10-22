# INVENT
Panel de administración para una empresa intermediaria de envíos de mercancías

### COSAS A TENER EN CUENTA:

* El archivo para poder cambiar los datos de conexión a la base de datos, el puerto, o el CORS se encuentra en: 'invent-nestjs/src/constants.ts'
* Antes de iniciar tanto el servidor como el cliente, ejecutar comando:
```
npm install
```
* En el archivo 'invent-nestjs/src/main.ts' se encuentra la llamda a la función que rellena las base de datos, por lo tanto, si no quieres que se reinicie cada vez que se ejecuta el servidor, comenta las lineas:
```
const seedsService = app.get(SeedsService);
await seedsService.seedDataBase();
```
* Para iniciar el servidor:
```
npm run start
```
* Para iniciar el cliente:
```
ng serve
```

Creo que eso es todo :)
