from django.shortcuts import render
def home(request):
    return render(request,'myapp/home.html')

def login(request):
    return render(request,'myapp/login.html')

def register(request):
    return render(request,'myapp/register.html')

def about(request):
    return render(request,'myapp/about.html')

def contact(request):
    return render(request,'myapp/contact.html')




