package handler

import (
	"database/sql"
	"net/http"

	"github.com/adriano-henrique/fintron/internal/models"
	"github.com/gin-gonic/gin"
)

type SubCategoriesHandler struct {
	db *sql.DB
}

func NewSubCategoriesHandler(db *sql.DB) *SubCategoriesHandler {
	return &SubCategoriesHandler{db: db}
}

func (sch *SubCategoriesHandler) CreateSubCategory(c *gin.Context) {
	var input models.SubCategory
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	subCategory, err := input.Create(sch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusCreated,
		gin.H{
			"subCategory": subCategory,
		},
	)
}

func (sch *SubCategoriesHandler) UpdateSubCategory(c *gin.Context) {
	var updatedSubCategory models.SubCategory
	if err := c.ShouldBindJSON(&updatedSubCategory); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	subCategory, err := updatedSubCategory.Update(sch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"subCategory": subCategory,
		},
	)
}

func (sch *SubCategoriesHandler) GetByCatID(c *gin.Context) {
	catID := c.Param("categoryID")

	if catID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Category ID is required"})
		return
	}

	subCategories, err := models.FetchSubCategoriesByCategoryID(catID, sch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"subCategories": subCategories,
		},
	)
}

func (sch *SubCategoriesHandler) DeleteSubCategory(c *gin.Context) {
	subCatID := c.Param("subCategoryID")

	if subCatID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "SubCategory ID is required"})
		return
	}

	err := models.DeleteSubCategory(subCatID, sch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"message": "SubCategory deleted successfully",
		},
	)
}
