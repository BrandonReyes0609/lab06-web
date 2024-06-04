1. Dirigete al directorio lab06-SW y ejecuta: 

docker build -t blog-brandon-db .

2.  - Luego ejecuta el siguiente ejecuta:

docker run --name brandon-db -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=post_db -e MYSQL_USER=brandon -e MYSQL_PASSWORD=123 -p 3306:3306 -d blog-brandon-db


3. Inicia el contendor
docker start brandon-db

4.  - Una vez hayas ejecutado sin errores la locationUn de docker, ejecuta:

npm start

5.  - Para probar el lint [Errores]
npm run lint




1. Detén el contenedor:

docker stop brandon-db

2. Elimina el contenedor:

docker rm brandon-db

3. Elimina la imagen:

docker rmi blog-brandon-db

        "start": "node src/main.js",
