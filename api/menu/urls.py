from django.urls import path
from .views import (
    create_category_view
)

urlpatterns = [
    path('create-category', create_category_view)
]
