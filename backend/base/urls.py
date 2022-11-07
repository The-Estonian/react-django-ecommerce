from django.urls import path
from .views import getRoutes, getProducts

urlpatterns = [
    path('', getRoutes, name="routes"),
    path('products/', getProducts, name="products"),
]

