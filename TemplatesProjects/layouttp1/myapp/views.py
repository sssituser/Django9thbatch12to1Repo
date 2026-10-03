from django.shortcuts import render
def home(request):
    dict={
        "Cname":"SSSIT",
        "Cage" :"25 Years Old",
        "Address":"KPHB Hyd"
    }
    return render(request,'myapp/home.html',dict)



def register(request):
    employees = [
    {
        "EmployeeId": 101,
        "EmployeeName": "Ravi",
        "EmployeeSalary": 30000
    },
    {
        "EmployeeId": 102,
        "EmployeeName": "Priya",
        "EmployeeSalary": 35000
    },
    {
        "EmployeeId": 103,
        "EmployeeName": "Arun",
        "EmployeeSalary": 40000
    }
]
    empdict={"emplist":employees}
    return render(request,'myapp/register.html',empdict)
def login(request):
    return render(request,'myapp/login.html')
def about(request):
    return render(request,'myapp/about.html')
def contact(request):
    return render(request,'myapp/contact.html')



