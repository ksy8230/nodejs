from django.db import models
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Sns
from .serializers import SnsSerializer
from rest_framework.parsers import JSONParser

# Create your views here.
# from python_api import viewsets
# from python_api import permissions


@csrf_exempt
def sns_list(request):
    if request.method == 'GET':
        query_set = Sns.objects.all()
        serializer = SnsSerializer(query_set, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SnsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
