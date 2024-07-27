package routes

import "github.com/adriano-henrique/fintron/internal/handler"

func healthGroupRouter(routerConfig *RouterConfig) {
	routerConfig.baseRouter.GET("/health", handler.HealthCheck)
}