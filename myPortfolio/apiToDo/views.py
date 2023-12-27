from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ToDo, Archived
from .serializers import TodoSerializer, ArchivedSerializer
from .utils import getTodoList, getTodoItem, getArchivedList, createTodo, updatedTodo, deleteTodo


@api_view(['GET'])
def getRoutes(request):
    
    routes = [
        {
            'Endpoint': '/todo/',
            'method': 'GET',
            'description': None,
            'archived': None,
            'completed': None
        },
        {
            'Endpoint': '/todo/id/',
            'method': 'GET',
            'description': None,
            'archived': None,
            'completed': None
        },
        {
            'Endpoint': '/todo/create/',
            'method': 'POST',
            'description': {'description': ""},
            'archived': {'archived': ''},
            'completed': {'completed': ''}
        },
        {
            'Endpoint': '/todo/id/update/',
            'method': 'PATCH',
            'description': {'description': ""},
            'archived': {'archived': ''},
            'completed': {'completed': ''}
        },
        {
            'Endpoint': '/todo/id/delete/',
            'method': 'DELETE',
            'description': None,
        },
        {
            'Endpoint': '/todo/archived/',
            'method': 'GET',
            'description': None,
            'archived': None,
            'completed': None
        },
    ]
    
    return Response(routes)

@api_view(['GET', 'POST'])
def getEToDo(request):
    if request.method == 'GET':
        return getTodoList(request)
    if request.method == 'POST':
        return createTodo(request)


@api_view(['GET', 'PATCH', 'DELETE'])
def getToDo(request, pk):
    if request.method == 'GET':
        return getTodoItem(request, pk)
    if request.method == 'PATCH':
        try:
            todo = ToDo.objects.get(pk=pk)
        except ToDo.DoesNotExist:
            return Response(status=404)

    data = request.data
    if 'completed' in data:
        todo.completed = data['completed']
    if 'archived' in data:
        todo.archived = data['archived']

    todo.save()
    serializer = TodoSerializer(todo)
    return Response(serializer.data)
    if request.method == 'DELETE':
        return deleteTodo(request, pk)


@api_view(['GET'])
def getArchived(request):
    if request.method == 'GET':
        return getArchivedList(request)
