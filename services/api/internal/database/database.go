package database

import (
	"database/sql"
	"errors"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

var db *sql.DB

func OpenConnection() error {
	envPath := os.Getenv("ENV_PATH")
	if envPath == "" {
		return errors.New("ENV_PATH not set")
	}
	err := godotenv.Load(envPath)
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
