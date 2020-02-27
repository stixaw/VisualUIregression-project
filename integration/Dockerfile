FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

VOLUME [ "/usr/src/app/tests" ]

CMD [ "npm", "run", "test:integration" ]
