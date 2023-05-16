# BLOG

## Simple Blog app: 

- React as TS framework 
- Express as Node web framework
- MySQL as Database management system 
- Docker to simplify DB setup

# Getting started

## Database in Docker Container

Docker must be installed [DOCKER-INSTALL](https://docs.docker.com/engine/install/)

Launch docker (preferably in Linux containers mode)

---


### **Install node modules for the whole project:**
```
npm run npm-install
```
### **Docker:**
- Build an image, create and run container:
```
npm run docker
```
- Stop the container:
```
npm run stop-container
```
- Remove the container:
```
npm run remove-container
```
### **React and Express:**
Start client and server parts of the app:
```
npm run start-app
```

Locally running app -> http://localhost:5173


