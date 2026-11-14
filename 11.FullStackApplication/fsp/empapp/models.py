from django.db import models

# Create your models here.
class Employee(models.Model):
    EmployeeId = models.IntegerField(primary_key=True)
    EmployeeName = models.CharField(max_length=40)
    EmployeeSalary = models.IntegerField()