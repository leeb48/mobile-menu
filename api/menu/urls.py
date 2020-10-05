from django.urls import path
from .views import (
    get_all_apetizers
)

urlpatterns = [
    path('appetizers', get_all_apetizers)
]
