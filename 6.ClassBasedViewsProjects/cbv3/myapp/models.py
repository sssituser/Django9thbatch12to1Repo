from django.db import models
from django.urls import reverse
class Student(models.Model):
    StudentId = models.IntegerField(primary_key=True)
    StudentName = models.CharField(max_length=50)
    StudentMarks = models.IntegerField()
    
    def get_absolute_url(self):
        return reverse("list")
    
