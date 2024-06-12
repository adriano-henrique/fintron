package models

import (
	"database/sql"
	"fmt"
	"os"
)

type Category struct {
	ID           string `json:"id"`
	CategoryName string `json:"name"`
	UserID       string `json:"user_id"`
}

func (cat *Category) Create(db *sql.DB) (*Category, error) {
	sqlStatement := `
		INSERT INTO categories (name, user_id)
		VALUES (?, ?)
	`

	result, err := db.Exec(sqlStatement, &cat.CategoryName, &cat.UserID)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to insert values into table, %v \n", err)
		return &Category{}, err
	}

	_, err = result.LastInsertId()
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to get last inserted data, %v \n", err)
		return &Category{}, err
	}
	return cat, nil
}

func (cat *Category) UpdateCategory(db *sql.DB) (*Category, error) {
	sqlStatement := `
		UPDATE categories
		SET name = ?
		WHERE id = ?
	`

	_, err := db.Exec(sqlStatement, &cat.CategoryName, &cat.ID)
	if err != nil {
		fmt.Println("failed to update table categories, ", err)
		return &Category{}, nil
	}

	return cat, nil
}

func FetchCategoriesByUser(userID string, db *sql.DB) ([]Category, error) {
	sqlStatement := `
		SELECT * from categories
		where user_id = ?
	`

	rows, err := db.Query(sqlStatement, userID)
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to execute query %v \n", err)
		return make([]Category, 0), err
	}
	defer rows.Close()

	var categories []Category
	for rows.Next() {
		var category Category

		if err := rows.Scan(&category.ID, &category.CategoryName, &category.UserID); err != nil {
			fmt.Println("Failed scanning row: ", err)
			return categories, err
		}

		categories = append(categories, category)

		if err := rows.Err(); err != nil {
			fmt.Println("Error during row iteration: ", err)
			return categories, err
		}
	}

	return categories, nil
}

func DeleteCategory(categoryID string, db *sql.DB) error {
	sqlStatemet := "DELETE FROM categories where id = ?"
	_, err := db.Exec(sqlStatemet, categoryID)
	if err != nil {
		fmt.Println("failed to delete category with id: ", categoryID)
		return err
	}
	return nil
}
