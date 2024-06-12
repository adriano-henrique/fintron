package routes

import (
	"github.com/adriano-henrique/fintron/internal/handler"
)

func categoriesGroupRouter(routerConfig *RouterConfig) {
	handler := handler.NewCategoriesHandler(routerConfig.db)

	routerConfig.baseRouter.GET("/categories/:userID", handler.GetCategories)
	routerConfig.baseRouter.PUT("/categories/:categoryID", handler.UpdateCategory)
	routerConfig.baseRouter.POST("/categories", handler.CreateCategory)
	routerConfig.baseRouter.DELETE("/categories/:categoryID", handler.DeleteCategory)
}
