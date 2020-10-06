from django.contrib import admin

from .models import (
    AppetizerItem, BeerItem, DesertItem, ExtraItem, NigiriItem, RollItem, SakeItem, SoftDrinkItem, WineItem
)


class AppetizerAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'vegetarian_options')
    search_fields = ('name', 'category')


admin.site.register(AppetizerItem, AppetizerAdmin)


class NigiriAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'vegetarian_options')
    search_fields = ('name', 'category')


admin.site.register(NigiriItem, NigiriAdmin)


class RollAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category',
                    'hand_roll_options', 'spicy_options')
    search_fields = ('name', 'category')


admin.site.register(RollItem, RollAdmin)


class DesertAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name', 'category')


admin.site.register(DesertItem, DesertAdmin)


class ExtraAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    search_fields = ('name',)


admin.site.register(ExtraItem, ExtraAdmin)


class WineAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name', 'category')


admin.site.register(WineItem, WineAdmin)


class BeerAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name', 'category')


admin.site.register(BeerItem, BeerAdmin)


class SakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name', 'category')


admin.site.register(SakeItem, SakeAdmin)


class SoftDrinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name', 'category')


admin.site.register(SoftDrinkItem, SoftDrinkAdmin)
