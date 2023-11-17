from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


def createNote(request):
    data = request.data
    note = Note.objects.create(
        title=data['title'],
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    
    if 'title' in data and data['title'] !='':
        note.title = data['title']
        
    if 'body' in data and data['body'] !='':
        note.body = data['body']
    
    note.save()
    serializer = NoteSerializer(instance=note)
    return Response(serializer.data)


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')