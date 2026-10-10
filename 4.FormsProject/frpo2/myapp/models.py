from django.db import models

class Student(models.Model):
    StudentId = models.IntegerField(primary_key=True)
    StudentName = models.CharField(max_length=40)
    StudentMarks = models.IntegerField()