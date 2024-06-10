package main

import (
	"github.com/adriano-henrique/fintron/internal/database"
)

func main() {
	database.OpenConnection()
	defer database.CloseConnection()
}
