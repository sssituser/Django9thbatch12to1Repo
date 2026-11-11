from rest_framework import viewsets
from stdapp.Serializers import StudentSerializer
from stdapp.models import Student

# Create your views here.

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
