from django.urls import path
from myapp import views

urlpatterns = [
    path('',views.home),
    path('about/',views.about),
    path('contact/',views.contact),
    path('edit/<int:id>/',views.edit),
    path('delete/<int:id>/',views.delete),
    path('details/<int:id>/',views.details),
    path('register/',views.register),
    path('students/',views.students,name='abc')
]
