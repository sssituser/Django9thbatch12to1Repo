from django.db import models
class Employee(models.Model):
    EmployeeId = models.IntegerField(primary_key=True)
    EmployeeName = models.CharField(max_length=50)
    EmployeeSalary = models.IntegerField()

