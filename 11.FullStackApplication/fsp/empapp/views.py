from django.shortcuts import render
from empapp.Seriralizers import EmployeeSerializer
from rest_framework import viewsets
from empapp.models import Employee
# Create your views here.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
