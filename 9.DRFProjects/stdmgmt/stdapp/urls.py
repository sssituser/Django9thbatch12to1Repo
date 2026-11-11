from django.urls import path,include
from rest_framework.routers import DefaultRouter
from stdapp.views import StudentViewSet
router = DefaultRouter()
router.register(r'students',StudentViewSet)

urlpatterns=[
    path('',include(router.urls)),
]