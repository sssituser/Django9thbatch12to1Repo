from django.shortcuts import render,redirect
from django.contrib.auth.decorators import *
from django.contrib.auth import logout

# Create your views here.
def home(request):
    return render(request,'myapp/home.html')

@login_required
def javaexam(request):
    return render(request,'myapp/java.html')

@login_required
def pythonexam(request):
    return render(request,'myapp/python.html')

def logout_view(request):
    logout(request)
    return redirect('login')

from myapp.forms import RegisterForm
def register(request):
    form = RegisterForm()
    if request.method=="POST":
        form = RegisterForm(request.POST)
        if form.is_valid:
            user=form.save()
            user.set_password(user.password)
            user.save()
            return redirect('login')
    return render(request,'myapp/register.html',{'form':form})
