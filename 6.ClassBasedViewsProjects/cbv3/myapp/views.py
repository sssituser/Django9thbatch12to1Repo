from django.shortcuts import render,get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import *
from myapp.models import Student
# Create your views here.


class StudentList(ListView):
    model=Student
    fields = '__all__'
    
class RegisterStudent(CreateView):
    model=Student
    fields='__all__'
        
class UpdateStudent(UpdateView):
    model=Student
    fields='__all__'

class RemoveStudent(DeleteView):
    model = Student
    success_url = reverse_lazy('list')

class StudentInfo(DetailView):
    model=Student
    fields ='__all__'
    
# student_list   student