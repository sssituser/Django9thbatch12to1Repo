from django.urls import path,include
from myapp import views

urlpatterns=[
    path('',views.home),
    path('reg/',views.register),
    path('about/',views.about),
    path('contact/',views.contact),
    path('javaex/',views.javaexam),
    path('pythonex/',views.pythonexam),
    path('uiex/',views.uiexam),
    path ('logout/',views.logoutview),
    path('accounts/',include('django.contrib.auth.urls'),name="login"),
]