### Setup:

1 Setup integration directory in project
2 npm init
3 npm install see Package.json
4 setup jest.config.js
5 setup setupTests.js
6 setup jest-puppeteer.config.js
7 create a test directory to house the spec files for visual regression tests
8 create spec.js file per component you want to test
9 root of entire project .npmignore
10 .gitignore

#### Package.json
###### dev dependencies
* "jest-image-snapshot": "^2.12.0"
* "jest-puppeteer": "^4.4.0"
* "puppeteer": "^2.1.1"

###### dependencies
* "jest": "^25.1.0"

#### Jest.Config.js (root of integration folder)
we implement a jest config file to manage the running of the tests, this is similar to how you run unit tests.

```
module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.spec\\.js$',
  setupFilesAfterEnv: ['./setupTests.js']
}
```
#### setupTest.js (root of integration folder)
SetupTest.js is responsible for setting the snapshot matching parameters that are used to determine failure or success.

```
const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  failureThreshold: 0.02,
  failureThresholdType: 'percent'
})

expect.extend({ toMatchImageSnapshot })
```

#### Jest-puppeteer.config.js (root of integration folder)

Jest-puppeteer is actually driving the browser for the testing
This file sets up the puppeteer arguments for launching the browser.
```
module.exports = {
  launch: {
    args: [ '--no-sandbox', '--disable-setuid-sandbox' ],
    defaultViewport: {
      width: 600,
      height: 100
    }
  }
}
```
#### .npmignore

Add:
/integration
docker-compose.yml
Dockerfile
Makefile

#### .gitignore
Add:
__diff_output__


## Dockerized Visual regression tests:

By making sure our Visual Regression Tests always run in the same Docker environment, we’re able to perform the tests on different machines and even in our CI pipeline without having to worry about minor rendering differences on these different machines.

### Setup:
 root level of integration directory

* Dockerfile
* .dockerignore

#### Dockerfile in integration directory:
```
FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

VOLUME [ "/usr/src/app/tests" ]

CMD [ "npm", "run", "test:integration" ]
```

#### .dockerignore root level of integration directory:
```
node_modules
```

###### root level of entire project:

* Dockerfile
* docker-compose.yml
* Makefile
* .dockerignore

### Dockerfile (root of project folder)
```
FROM node:12.14.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
ENV PORT=3000

CMD [ "npm", "run", "docker:start" ]
```

### docker-compose.yml
```
version: "3"
services:
  storybook:
    build: .
    environment:
      PORT: 3000
    ports:
      - 3000:3000
  jest-puppeteer:
    environment:
      TEST_URL:  http://storybook:3000
    build:
      context: ./integration
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    depends_on:
      - storybook
    command: "wait-for-it.sh storybook:3000 -- npm run test:integration"
    volumes:
      - ./integration/tests:/usr/src/app/tests
```

### Makefile
```
test: build visual-regression clean

build:
	docker-compose build

visual-regression:
	docker-compose run jest-puppeteer

clean:
	docker-compose down
```

### .dockerignore
```
node_modules
dist
coverage
```
