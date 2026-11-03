from django.urls import path
from myapp import views
urlpatterns = [
    path('',views.StudentList.as_view(),name='list'),
    path('create/',views.RegisterStudent.as_view()),
    path('update/<int:pk>/',views.UpdateStudent.as_view()),
    path('detail/<int:pk>/',views.StudentInfo.as_view()),
    path('delete/<int:pk>/',views.RemoveStudent.as_view()),
]
