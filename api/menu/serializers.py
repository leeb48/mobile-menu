from rest_framework import serializers
from .models import AppetizerItem, SoftDrinkItem


class AppetizerSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppetizerItem
        fields = ('name', 'price', 'image', 'description',
                  'category', 'vegetarian_options')


class SoftDrinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SoftDrinkItem
        fields = ('name', 'price', 'image', 'description',
                  'category')
