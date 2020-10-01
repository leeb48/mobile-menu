from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import FoodCategorySerializer

import os


# Create Food Category View
@api_view(['POST'])
@permission_classes([AllowAny, ])
def create_category_view(request):
    serializer = FoodCategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
