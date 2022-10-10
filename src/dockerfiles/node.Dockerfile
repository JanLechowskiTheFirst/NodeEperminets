FROM node:18-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
WORKDIR /src
COPY ./ /src
RUN npm install

FROM base as dev
ENV NODE_ENV=development
WORKDIR /src
COPY ./ /src
RUN npm install nodemon 
# plus later & npm install
