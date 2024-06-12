package routes

import "github.com/adriano-henrique/fintron/internal/handler"

func subCategoriesGroupRouter(routerConfig *RouterConfig) {
	handler := handler.NewSubCategoriesHandler(routerConfig.db)

	routerConfig.baseRouter.GET("/subCategories/:categoryID", handler.GetByCatID)
	routerConfig.baseRouter.POST("/subCategories", handler.CreateSubCategory)
	routerConfig.baseRouter.PUT("/subCategories/:subCategoryID", handler.UpdateSubCategory)
	routerConfig.baseRouter.DELETE("/subCategories/:subCategoryID", handler.DeleteSubCategory)
}
