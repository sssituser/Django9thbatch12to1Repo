from django.db import models
from django.urls import reverse
class Employee(models.Model):
    EmployeeId = models.IntegerField(primary_key=True)
    EmployeeName = models.CharField(max_length=50)
    EmployeeSalary = models.IntegerField()
    
    def get_absolute_url(self):
        return reverse("list")
    
