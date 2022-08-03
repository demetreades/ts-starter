FROM node:alpine

WORKDIR /usr/api

RUN npm i -g npm@latest nodemon
# RUN npm install -g ts-node

COPY package*.json .
RUN npm i && npm cache clean --force
# ENV PATH=/usr/api/node_modules/.bin:$PATH

COPY tsconfig.json .
COPY nodemon.json .

COPY src ./src

RUN ls -a


COPY . .
