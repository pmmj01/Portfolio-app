from django.contrib import admin
from .models import ToDo, Archived

admin.site.register(ToDo)
admin.site.register(Archived)