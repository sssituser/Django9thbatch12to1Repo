from rest_framework import serializers
from empapp.models import Employee
from rest_framework.permissions import IsAuthenticated

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields ='__all__'
        permission_classes = [IsAuthenticated]