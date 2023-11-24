from django.shortcuts import render
from rest_framework import generics
from .models import SnakeGame
from .serializers import SnakeGameSerializer

class SnakeGameDetail(generics.RetrieveUpdateAPIView):
    queryset = SnakeGame.objects.all()
    serializer_class = SnakeGameSerializer