from django.urls import path
from .views import (
    get_all_apetizers, get_all_soft_drinks, get_all_sake
)

urlpatterns = [
    path('appetizers', get_all_apetizers),
    path('soft-drinks', get_all_soft_drinks),
    path('sake', get_all_sake)

]
