build-api:
	go build -o bin/api services/api/main.go

run-api:
	cd services/api && go run main.go