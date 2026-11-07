from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    num1 = 5
    num2 = 2
    return HttpResponse(f"<h1>Home Page - {num1/num2}</h1>")
