#specify a base image
#we are choosing node:10.8-alpine to reproduce error 
FROM node:10.8-alpine

#Use latest version
#FROM node:alpine  

WORKDIR /usr/app

#copying code
COPY ./package.json ./

#install dependencies
COPY ./ ./
RUN npm install
#testing add express explicitly to run nodejs apps
RUN npm install express

#default command that runs when the container is first created
CMD ["npm", "start"]