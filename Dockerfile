FROM node:12.14.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
ENV PORT=3000

CMD [ "npm", "run", "docker:start" ]
