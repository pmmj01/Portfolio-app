from rest_framework.serializers import ModelSerializer
from .models import SnakeGame


class SnakeGameSerializer(ModelSerializer):
    class Meta:
        model = SnakeGame
        fields = '__all__'