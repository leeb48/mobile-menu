from rest_framework import serializers
from .models import AppetizerItem, SoftDrinkItem, SakeItem, NigiriItem


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


class SakeSerializer(serializers.ModelSerializer):

    class Meta:
        model = SakeItem
        fields = ('name', 'image', 'category')


class NigiriSerializer(serializers.ModelSerializer):
    class Meta:
        model = NigiriItem
        fields = ('name', 'price', 'image', 'category',
                  'description', 'vegetarian_options')
