from django.urls import path
from . import views

urlpatterns = [
    path('', views.SnakeGameDetail.as_view(), name="snake-game-detail"),
    ]
