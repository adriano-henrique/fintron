package routes

import (
	"database/sql"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type RouterConfig struct {
	db         *sql.DB
	baseRouter *gin.RouterGroup
}

func BuildRoutes(db *sql.DB) *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())

	routerConfig := RouterConfig{
		db:         db,
		baseRouter: r.Group("/api/v1"),
	}

	categoriesGroupRouter(&routerConfig)
	subCategoriesGroupRouter(&routerConfig)
	healthGroupRouter(&routerConfig)

	return r
}
