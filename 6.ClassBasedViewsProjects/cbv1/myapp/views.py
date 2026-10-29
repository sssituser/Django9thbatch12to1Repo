from django.shortcuts import render
from django.views.generic import *
from django.urls import reverse_lazy
from myapp.models import Employee
# Create your views here.

class CreateEmployee(CreateView):
    model = Employee
    fields='__all__'
    
class EmployeeList(ListView):
    model = Employee
    fields='__all__'
    
class EmployeeDetails(DetailView):
    model = Employee
    fields='__all__'
    
class EditEmployee(UpdateView):
    model = Employee
    fields='__all__'
    
class DeleteEmployee(DeleteView):
    model = Employee
    success_url = reverse_lazy('list')

    
