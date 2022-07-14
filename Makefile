setup:
	npm install

run_local:
	docker-compose up

run:
	node app.js

test:
	npm run test

lint:
	eslint src/*