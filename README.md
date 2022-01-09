# Spotify App - NodeJS/Express/MongoDB
spotify app coding challenge

Hola. Bienvenido  a la aplicación de prueba utilizando NodeJS, Express, MongoDb, y el API de Spotify.

# Instalación

Clona este repositorio a tu máquina local:

`git clone https://github.com/miguel3231/spotify-app.git`

En la raiz de este proyecto corre el comando en la terminal:

`npm install`

Para correr la aplicación, corre:

`npm start`

Se abrirá la aplicación en el puerto 3000.

# Configuración

Crea un archivo llamado ".env" en la raíz del proyecto. este archivo debe verse de la siguiente manera:<br>
DB_CONNECTION={valor}<br>
SPOTIFY_CLIENT_ID={valor}<br>
SPOTIFY_CLIENT_SECRET={valor}<br>
<br>
Donde {valor} es reemplazado por la configuración correspondiente.
Incluiré este archivo y sus valores en un correo. 

# Endpoints

## Artista

Busca ID de un artista<br>
GET http://localhost:3000/artist?name={nombre-de-artista}<br>
Reemplaza {nombre-de-artista} con el nombre de algún artista.

Busca los albums de un artista<br>
GET http://localhost:3000/artist/albums?name={nombre-de-artista}<br>
Reemplaza {nombre-de-artista} con el nombre de algún artista.

Busca los Top Tracks de un artista<br>
GET http://localhost:3000/artist/toptracks?name={nombre-de-artista}<br>
Reemplaza {nombre-de-artista} con el nombre de algún artista.

## Usuario

Información del usuario acutal<br>
GET http://localhost:3000/user<br>
[No implementado]


# Uso de Spotify API Wrapper

Ya existe una libreria en npm llamado spotify-web-api-node para hacer llamadas al API de Spotify. Esta librería es incluida en la documentación de Spotify, así que es de confiar. Decidí utilizarla para agilizar mi desarrollo.