from django.db import models

class ToDo(models.Model):
    description = models.CharField(max_length=255)
    archived = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.description

class Archived(models.Model):
    description = models.OneToOneField(ToDo, on_delete=models.CASCADE, related_name='archived_todo', primary_key=True)
    archived = models.DateTimeField(auto_now_add=True)
    
    def __ser__(self):
        return self.ToDo.description