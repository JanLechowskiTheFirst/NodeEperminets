FROM node:18-alpine as base

COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
WORKDIR /src
COPY . /
RUN npm ci
CMD ["node", "start_prod"]


FROM base as dev
ENV NODE_ENV=development
WORKDIR /src
COPY . /
RUN npm install -g nodemon & npm install
CMD ["nodemon", "start"]
