from django.shortcuts import render,redirect
from myapp.models import Student
from myapp.forms import StudentForm

def home(request):
    return render(request,'myapp/home.html')

def about(request):
    return render(request,'myapp/about.html')

def register(request):
    form = StudentForm()
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return redirect('students')
    return render(request,'myapp/register.html',{"form":form})

def contact(request):
    return render(request,'myapp/contact.html')

def edit(request,id):
    return render(request,'myapp/edit.html')

def details(request,id):
    return render(request,'myapp/details.html')

def delete(request,id):
    return render(request,'myapp/delete.html')

def students(request):
    studs = Student.objects.all()
    return render(request,'myapp/students.html',{"stu_list":studs})


