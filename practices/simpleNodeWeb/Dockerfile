#specify a base image
#we are choosing node:10.8-alpine to reproduce error 
FROM node:10.8-alpine

#Use latest version
#FROM node:alpine  

WORKDIR /usr/app

#copying package.json to install dependencies
COPY ./package.json ./
RUN npm install

#copy source code and rest of the files
COPY ./ ./

#testing add express explicitly to run nodejs apps
#RUN npm install express

#default command that runs when the container is first created
CMD ["npm", "start"]