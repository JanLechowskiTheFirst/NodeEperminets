FROM node:latest
WORKDIR /src
COPY package*.json ./
RUN npm install -g nodemon && npm install
COPY . /
CMD ["npm", "start"]
EXPOSE 3000
