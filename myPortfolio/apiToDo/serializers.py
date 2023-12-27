from rest_framework.serializers import ModelSerializer
from .models import ToDo, Archived


class TodoSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'

class ArchivedSerializer(ModelSerializer):
    class Meta:
        model = Archived
        fields = '__all__'