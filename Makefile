

test: build visual-regression clean

build:
	docker-compose build

visual-regression:
	docker-compose run jest-puppeteer

clean:
	docker-compose down
