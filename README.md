# BLOG-mysql-express-react-ts

Simple Blog app

# Getting started

## Database in Docker Container

Docker must be installed [DOCKER-INSTALL](https://docs.docker.com/engine/install/)

### In ./docker directory

Build an image from a Dockerfile
```
docker build -t mysql-blog .
```
Create and run a new container from an image
```
docker run -p 3306:3306 --name mysql-blog -e MYSQL_ROOT_PASSWORD=password -d mysql-blog
```
### To stop or remove container
Stop the running container
```
docker stop mysql-blog
```
Remove container
```
docker rm mysql-blog
```
This command force-removes a running container.
```
docker rm -f mysql-blog
```

## Express

### In ./express directory

Install node modules and run the server
```
npm i
```
```
npm run start:nodemon
```

### In ./react-app directory

Install node modules and run react app
```
npm i
```
```
npm run dev
```

