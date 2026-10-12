from django.shortcuts import render,redirect,get_object_or_404
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
    stu = get_object_or_404(Student,StudentId=id)
    return render(request,'myapp/edit.html',{"stud":stu})

def details(request,id):
    stu = get_object_or_404(Student,StudentId=id)
    return render(request,'myapp/details.html',{"stud":stu})

def delete(request,id):
    stu = get_object_or_404(Student,StudentId=id)
    return render(request,'myapp/delete.html',{"stud":stu})

def students(request):
    studs = Student.objects.all()
    return render(request,'myapp/students.html',{"stu_list":studs})


