from django.urls import path
from myapp import views
urlpatterns = [
    path('',views.home,name='home'),
    path('register/',views.register),
    path('about/',views.about),
    path('contact/',views.contact),
    path('edit/<int:id>/',views.edit),
    path('delete/<int:id>/',views.delete),
    path('find/<int:id>/',views.find),
    path('employees/',views.employees,name='employees'),
        
]
