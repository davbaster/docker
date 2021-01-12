FROM node:alpine

#work directory for the app
WORKDIR '/app'

#installing dependencies, we are just copying package.json to reduce building time
COPY package.json .
RUN npm install

#copying the rest of the files
COPY . .

CMD ["npm", "start"]