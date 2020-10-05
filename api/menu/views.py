from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import AppetizerItem

from .serializers import AppetizerSerializer

import os
import json


@api_view(['GET'])
def get_all_apetizers(request):
    appetizer_qs = AppetizerItem.objects.all()

    appetizer_sr = AppetizerSerializer(appetizer_qs, many=True)

    return Response(appetizer_sr.data, status=status.HTTP_200_OK)
