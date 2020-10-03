from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import FoodCategorySerializer, FoodItemSerializer
from .models import FoodCategory, FoodItem

import os
import json


@api_view(['POST'])
@permission_classes([AllowAny, ])
def create_category(request):
    serializer = FoodCategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def create_food_item(request):

    try:

        image = request.data.get('img')

        foodData = request.data.get('data')

        foodData_dict = json.loads(foodData)

        category_qs = FoodCategory.objects.filter(
            category=foodData_dict['category'])

        category = category_qs.first()

        serializer = FoodItemSerializer(data=foodData_dict)

        if serializer.is_valid():
            food_item = serializer.save()
            food_item.category.add(category)
            if image:
                food_item.image = image
            food_item.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_200_OK)

    except Exception as e:
        raise e

    return Response({}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_all_food_items(request):
    try:
        food_item_qs = FoodItem.objects.all()
        food_item_sr = FoodItemSerializer(food_item_qs, many=True)

        return Response(food_item_sr.data, status=status.HTTP_200_OK)

    except Exception as e:
        raise e
