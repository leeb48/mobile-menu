from django.contrib import admin
from .models import FoodCategory, FoodItem


class FoodCategoryAdmin(admin.ModelAdmin):
    list_display = ('category',)
    search_fields = ('category',)


admin.site.register(FoodCategory, FoodCategoryAdmin)


class FoodItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description',)
    search_fields = ('name',)


admin.site.register(FoodItem, FoodItemAdmin)
