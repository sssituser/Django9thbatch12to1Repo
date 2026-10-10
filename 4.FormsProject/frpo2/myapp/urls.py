from django.urls import path
from myapp import views

urlpatterns = [
    path('',views.home),
    path('about/',views.about),
    path('contact/',views.contact),
    path('edit/',views.edit),
    path('delete/',views.delete),
    path('details/',views.details),
    path('register/',views.register),
    path('students/',views.students,name='students')
]
