from django.urls import path
from .views import (
    get_all_apetizers, get_all_soft_drinks, get_all_sake, get_all_nigiri, get_all_rolls
)

urlpatterns = [
    path('appetizers', get_all_apetizers),
    path('soft-drinks', get_all_soft_drinks),
    path('sake', get_all_sake),
    path('nigiri', get_all_nigiri),
    path('rolls', get_all_rolls)

]
