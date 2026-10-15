from django.urls import path
from myapp import views
urlpatterns = [
    path('',views.home),
    path('about/',views.about),
    path('contact/',views.contact),
    path('register/',views.register),
    path('details/<int:id>/',views.details),
    path('edit/<int:id>/',views.edit),
    path('delete/<int:id>/',views.delete),
    path('trainers/',views.trainers,name="abc"),        
]
