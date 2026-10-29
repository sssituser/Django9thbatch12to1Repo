from django.shortcuts import render,redirect,get_object_or_404
from myapp.forms import EmployeeForm
from myapp.models import Employee
# Create your views here.
def home(request):
    return render(request,'myapp/home.html')

def register(request):
    form = EmployeeForm()   
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return redirect('employees')               
    return render(request,'myapp/register.html',{'form':form})

def about(request):
    return render(request,'myapp/about.html')

def contact(request):
    return render(request,'myapp/contact.html')

def edit(request,id):
    emp = get_object_or_404(Employee,EmployeeId=id)
    form = EmployeeForm(instance=emp)
    if request.method=='POST':
        form = EmployeeForm(request.POST,instance=emp)
        if form.is_valid():
            form.save(commit=True)
            return redirect('employees')      
    return render(request,'myapp/edit.html',{'form':form})

def delete(request,id):
    emp = get_object_or_404(Employee,EmployeeId=id)
    if request.method =='POST':
        Employee.delete(emp)
        return redirect('employees')
    return render(request,'myapp/delete.html',{'emp':emp})


def employees(request):
    emps = Employee.objects.all()
    return render(request,'myapp/employees.html',{'emp_list':emps})

def find(request,id):
    emp = get_object_or_404(Employee,EmployeeId=id)
    return render(request,'myapp/find.html',{'emp':emp})