from django.urls import path
from myapp.views import *

urlpatterns = [
    path('',EmployeesList.as_view(),name='list'),
    path('create/',CreateEmployee.as_view()),
    path('edit/<int:pk>/',EditEmployee.as_view()),
    path('delete/<int:pk>/',RemoveEmployee.as_view()),
    path('details/<int:pk>/',EmployeeDetail.as_view()),
]
