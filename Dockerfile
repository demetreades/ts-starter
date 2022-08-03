FROM node:alpine

WORKDIR /usr/api

RUN npm i -g npm@latest

COPY package*.json .
RUN npm i && npm cache clean --force
# ENV PATH=/usr/api/node_modules/.bin:$PATH

COPY tsconfig.json .
COPY nodemon.json .

COPY . .
