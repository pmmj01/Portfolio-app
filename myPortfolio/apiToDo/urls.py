from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes_todo"),
    path('todo/', views.getEToDo, name="get_e_todo"),
    path('todo/<str:pk>/', views.getToDo, name="get_todo"),
    path('todo/archived/', views. getArchived, name="get_archived")
    ]