from django.test import TestCase
from apiToDo.models import ToDo, Archived

class TestArchiveSignal(TestCase):
    def test_archiving_task(self):
        # Tworzenie zadania ToDo
        task = ToDo.objects.create(description='Test task', archived=False, completed=False)
        
        # Sprawdzenie, czy zostało zarchiwizowane
        self.assertFalse(task.archived)
        task.archived = True
        task.save()

        # Sprawdzenie, czy zadanie zostało przeniesione do archiwum
        archived_task = Archived.objects.filter(description='Test task').first()
        self.assertIsNotNone(archived_task)
        self.assertEqual(archived_task.description, 'Test task')
