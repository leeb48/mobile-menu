from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

import os


@api_view(['GET'])
def test(request):
    return Response({'msg': 'hello'}, status=status.HTTP_200_OK)
