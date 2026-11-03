from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    a = 10
    b = 0
    return HttpResponse(f"<h1> Home Page:{a//b}</h1>")
    
