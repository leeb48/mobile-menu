from rest_framework import serializers
from .models import FoodCategory, FoodItem


class FoodCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodCategory
        fields = ('category',)


class FoodItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodItem
        fields = ('name', 'price', 'description', 'image')
