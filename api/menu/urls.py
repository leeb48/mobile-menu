from django.urls import path
from .views import (
    create_category, create_food_item, get_all_food_items
)

urlpatterns = [
    path('create-category', create_category),
    path('create-food-item', create_food_item),
    path('get-all-food-items', get_all_food_items)
]
