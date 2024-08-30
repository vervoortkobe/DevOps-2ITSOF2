cd ./traefik
docker compose up -d
cd ../jenkins
docker compose up -d
cd ../extras
docker compose up -d
cd ../todo-webapp
