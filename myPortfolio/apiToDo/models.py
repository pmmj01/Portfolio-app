from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class ToDo(models.Model):
    description = models.CharField(max_length=255)
    archived = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description

class Archived(models.Model):
    description = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.description
    
@receiver(post_save, sender=ToDo)
def archive_task(sender, instance, created, **kwargs):
    if instance.archived:
        Archived.objects.create(description=instance.description, created=instance.created, completed=instance.completed)
