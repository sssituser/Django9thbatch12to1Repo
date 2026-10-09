from django.db import models
class Employee(models.Model):
    EmpId = models.IntegerField(primary_key=True)
    EmpName = models.CharField(max_length=50)
    EmpSal = models.DecimalField(max_digits=6,decimal_places=2)
