package handler

import (
	"database/sql"
	"net/http"

	"github.com/adriano-henrique/fintron/internal/models"
	"github.com/gin-gonic/gin"
)

type CategoriesHandler struct {
	db *sql.DB
}

func NewCategoriesHandler(db *sql.DB) *CategoriesHandler {
	return &CategoriesHandler{db: db}
}

func (ch *CategoriesHandler) GetCategories(c *gin.Context) {
	categories, err := models.FetchCategoriesByUser(c.Param("userID"), ch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"categories": categories,
		},
	)
}

func (ch *CategoriesHandler) UpdateCategory(c *gin.Context) {
	var updatedCategory models.Category
	if err := c.ShouldBindJSON(&updatedCategory); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	category, err := updatedCategory.UpdateCategory(ch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"category": category,
		},
	)
}

func (ch *CategoriesHandler) CreateCategory(c *gin.Context) {
	var input models.Category
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	category, err := input.Create(ch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusCreated,
		gin.H{
			"category": category,
		},
	)
}

func (ch *CategoriesHandler) DeleteCategory(c *gin.Context) {
	categoryID := c.Param("categoryID")

	if categoryID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Category ID is required"})
		return
	}

	err := models.DeleteCategory(categoryID, ch.db)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"message": "Category deleted successfully",
		},
	)
}
