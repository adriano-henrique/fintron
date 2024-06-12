package models

import (
	"database/sql"
	"fmt"
	"os"
)

type SubCategory struct {
	ID              string `json:"id"`
	SubCategoryName string `json:"name"`
	CategoryID      string `json:"category_id"`
}

func (subCat *SubCategory) Create(db *sql.DB) (*SubCategory, error) {
	sqlStatement := `
		INSERT INTO subcategories (name, category_id)
		VALUES (?, ?)
	`

	_, err := db.Exec(sqlStatement, &subCat.SubCategoryName, &subCat.CategoryID)
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to insert value into table, %v \n", err)
		return &SubCategory{}, err
	}

	return subCat, nil
}

func (subCat *SubCategory) Update(db *sql.DB) (*SubCategory, error) {
	sqlStatement := `
		UPDATE subcategories
		SET name = ?
		WHERE id = ?
	`

	_, err := db.Exec(sqlStatement, &subCat.SubCategoryName, &subCat.ID)
	if err != nil {
		fmt.Println("failed to update table subcategories, ", err)
		return &SubCategory{}, err
	}

	return subCat, nil
}

func FetchSubCategoriesByCategoryID(catID string, db *sql.DB) ([]SubCategory, error) {
	sqlStatement := `
		SELECT * from subcategories
		WHERE category_id = ?
	`

	rows, err := db.Query(sqlStatement, catID)
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to execute query %v, \n", err)
		return make([]SubCategory, 0), err
	}
	defer rows.Close()

	var subCategories []SubCategory
	for rows.Next() {
		var subCat SubCategory

		if err := rows.Scan(&subCat.ID, &subCat.SubCategoryName, &subCat.CategoryID); err != nil {
			fmt.Println("failed scanning row: ", err)
			return subCategories, err
		}

		subCategories = append(subCategories, subCat)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error during row iteration: ", err)
		return subCategories, err
	}

	return subCategories, nil
}

func DeleteSubCategory(subCatID string, db *sql.DB) error {
	sqlStatemet := "DELETE FROM subcategories where id = ?"
	_, err := db.Exec(sqlStatemet, subCatID)
	if err != nil {
		fmt.Println("failed to delete category with id: ", subCatID)
		return err
	}
	return nil
}
