from django.shortcuts import render,get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import *
from myapp.models import Employee

class CreateEmployee(CreateView):
    model=Employee
    fields='__all__'

class EditEmployee(UpdateView):
    model = Employee
    fields="__all__"
    
class EmployeesList(ListView):
    model = Employee
    fields = "__all__"   
    
    
class EmployeeDetail(DetailView):
    model = Employee
    fields ="__all__"
    
class RemoveEmployee(DeleteView):
    model = Employee
    success_url = reverse_lazy("list")


