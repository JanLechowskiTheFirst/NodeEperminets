FROM node:16-alpine as base

COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
COPY . /docker
RUN npm ci
CMD ["node", "start_prod"]


FROM base as dev
ENV NODE_ENV=developments
COPY . /docker
RUN npm install -g nodemon
RUN npm install
CMD ["node", "start"]
