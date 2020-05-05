

test: build visual-regression clean

test-update: build visual-update clean

build:
	docker-compose build

visual-update: build
	docker-compose run jest-puppeteer wait-for-it.sh -s -t 60 storybook:3000 -- npm run test:integration -- -u

visual-regression: build
	docker-compose run jest-puppeteer

clean:
	docker-compose down
