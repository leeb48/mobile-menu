from rest_framework import serializers
from .models import AppetizerItem


class AppetizerSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppetizerItem
        fields = ('name', 'price', 'image', 'description',
                  'category', 'vegetarian_options')
