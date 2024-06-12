package database

import (
	"database/sql"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

var db *sql.DB

func OpenConnection() error {
	err := godotenv.Load("../../.env")
	if err != nil {
		return err
	}
	dbUrl := os.Getenv("TURSO_DATABASE_URL")
	dbAuthToken := os.Getenv("TURSO_AUTH_TOKEN")

	fullUrl := dbUrl + "?authToken=" + dbAuthToken
	db, err = sql.Open("libsql", fullUrl)
	if err != nil {
		return err
	}
	return nil
}

func CloseConnection() error {
	if db != nil {
		return db.Close()
	}
	return nil
}

func GetDB() *sql.DB {
	return db
}
