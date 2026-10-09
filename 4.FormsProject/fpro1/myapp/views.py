from django.shortcuts import render,redirect
from myapp.models import Employee
from myapp.forms import EmployeeForm
# Create your views here.
def home(request):
    EmpForm = EmployeeForm()
    dict={"Form":EmpForm}
    if request.method == 'POST':
        EmpForm = EmployeeForm(request.POST)
        if EmpForm.is_valid():
            EmpForm.save(commit=True)
            print("Employee Added...")
            return redirect("emps")
    return render(request,'myapp/home.html',dict)

def employees(request):
    emps = Employee.objects.all()
    return render(request,'myapp/employees.html',{'emp_list':emps})

