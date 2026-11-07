from django.urls import path,include
from myapp import views


urlpatterns = [
    path('',views.home),
    path('javaex/',views.javaexam),
    path("pythonex/",views.pythonexam),
    path('register/',views.register),
    path('logout/',views.logout_view),
    path('accounts/',include('django.contrib.auth.urls'),name='login'),
]
