from django.urls import path
from myapp import views

urlpatterns = [
    path('',views.EmployeeList.as_view(),name='list'),
    path('create/',views.CreateEmployee.as_view()),
    path('edit/<int:pk>/',views.EditEmployee.as_view()),
    path('delete/<int:pk>/',views.DeleteEmployee.as_view()),
    path('detail/<int:pk>/',views.EmployeeDetails.as_view()),
]

