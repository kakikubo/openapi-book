OPEN_API_SCHEMA_PATH = openapi/openapi.yaml

default: up

init:
	docker-compose build
	docker-compose run --rm web bin/setup

up:
	mkdir -p tmp/pids
	rm -rf tmp/pids/*
	docker-compose up

swagger:
	docker run -d -p 80:8080 --name editor swaggerapi/swagger-editor:v4.2.2
