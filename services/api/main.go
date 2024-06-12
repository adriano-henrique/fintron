package main

import (
	"github.com/adriano-henrique/fintron/internal/database"
	"github.com/adriano-henrique/fintron/internal/routes"
)

func main() {
	database.OpenConnection()
	defer database.CloseConnection()
	db := database.GetDB()
	r := routes.BuildRoutes(db)
	r.Run()
}
