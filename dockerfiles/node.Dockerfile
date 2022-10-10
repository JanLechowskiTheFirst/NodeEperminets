FROM alpine:latest as base

# WORKDIR /src
RUN npm install -g npm
RUN npm install -g node
RUN npm install -g nodemon
COPY package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
RUN npm install
COPY . /
CMD ["node", "start_prod"]

FROM base as dev
ENV NODE_ENV=developments
RUN npm install
COPY . /
CMD ["node", "start"]
