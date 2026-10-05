from django.shortcuts import render
def home(request):
    students=[
        {
            "Id":111,
            "Name":"abc",
            "Marks":500
        },
        {
            "Id":113,
            "Name":"def",
            "Marks":600
        },
        {
           "Id":114,
            "Name":"pqr",
            "Marks":560
        },
           
    ]
    sdict = {"Stu_List":students}
    return render(request,'myapp/home.html',sdict)

def login(request):
    return render(request,'myapp/login.html')

def register(request):
    return render(request,'myapp/register.html')

def about(request):
    return render(request,'myapp/about.html')

def contact(request):
    return render(request,'myapp/contact.html')




