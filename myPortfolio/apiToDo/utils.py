from rest_framework.response import Response
from .models import ToDo, Archived
from .serializers import TodoSerializer, ArchivedSerializer


def getTodoList(request):
    todo = ToDo.objects.all().order_by('-created')
    serializer = TodoSerializer(todo, many=True)
    
    return Response(serializer.data)

def getTodoItem(request, pk):
    try:
        todo = ToDo.objects.get(id=pk)
    except ToDo.DoesNotExist:
        return Response(status=404)

    data = request.data

    if 'completed' in data and data['completed'] is not None:
        todo.completed = data['completed']
        todo.save()
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
    else:
        return Response({'error': 'Pole "completed" jest wymagane'}, status=400)

def getArchivedList(request):
    archived = Archived.objects.all().order_by('-created')
    serializer = ArchivedSerializer(archived, many=True)
    
    return Response(serializer.data)

def createTodo(request):
    serializer = TodoSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    
    return Response(serializer.errors, status=400)

def updatedTodo(request, pk):
    try:
        todo = ToDo.objects.get(id=pk)
    except ToDo.DoesNotExist:
        return Response(status=404)
    
    serializer = TodoSerializer(todo, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    elif todo.archived:
        todo.archive()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=400)

def deleteTodo(request, pk):
    try:
        todo = ToDo.objects.get(id=pk)
    except ToDo.DoesNotExist:
        return Response(status=404)
    
    if todo.archived:
        Archived.objects.create(
            description=todo.description,
            completed=todo.completed
        )
    todo.delete()
    
    return Response(status=204)