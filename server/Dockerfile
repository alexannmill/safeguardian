FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3011

CMD ["npm", "start"]