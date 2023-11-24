from django.db import models

class SnakeGame(models.Model):
    snake_position = models.TextField(default="[(0, 0)]")
    score = models.IntegerField(default=0)
    life = models.IntegerField(default=10)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self): 
        return self.created