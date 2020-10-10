from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import(AppetizerItem, SoftDrinkItem,
                    SakeItem, NigiriItem, RollItem)

from .serializers import(AppetizerSerializer, SoftDrinkSerializer,
                         SakeSerializer, NigiriSerializer, RollSerializer)

import os
import json


@api_view(['GET'])
def get_all_apetizers(request):
    appetizer_qs = AppetizerItem.objects.all()

    appetizer_sr = AppetizerSerializer(appetizer_qs, many=True)

    return Response(appetizer_sr.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_soft_drinks(request):
    appetizer_qs = SoftDrinkItem.objects.all()

    soft_drink_sr = SoftDrinkSerializer(appetizer_qs, many=True)

    return Response(soft_drink_sr.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_sake(request):
    sake_qs = SakeItem.objects.all()

    sake_sr = SakeSerializer(sake_qs, many=True)

    return Response(sake_sr.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_rolls(request):
    roll_qs = RollItem.objects.all()

    roll_sr = RollSerializer(roll_qs, many=True)

    return Response(roll_sr.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_nigiri(request):
    nigiri_qs = NigiriItem.objects.all()

    nigiri_sr = NigiriSerializer(nigiri_qs, many=True)

    return Response(nigiri_sr.data, status=status.HTTP_200_OK)
