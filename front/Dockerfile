FROM node:latest

#create working directory
WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm","start"]
