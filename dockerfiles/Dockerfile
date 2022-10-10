FROM node:latest

# WORKDIR /src
# RUN npm install -g npm
# RUN npm install -g node
COPY package*.json ./

# FROM base as production
# ENV NODE_ENV=production
# RUN npm ci
# RUN npm install
# COPY . /
# CMD ["node", "start_prod"]

# FROM base as dev
# ENV NODE_ENV=developments
# RUN npm install
RUN npm install -g nodemon && npm install
COPY . /
CMD ["node", "start"]
EXPOSE 3000
