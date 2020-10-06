from django.urls import path
from .views import (
    get_all_apetizers, get_all_soft_drinks
)

urlpatterns = [
    path('appetizers', get_all_apetizers),
    path('soft-drinks', get_all_soft_drinks)
]
