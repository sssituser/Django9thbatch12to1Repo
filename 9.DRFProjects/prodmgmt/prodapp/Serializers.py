from rest_framework import serializers
from prodapp.models import Product
from rest_framework.permissions  import IsAuthenticated
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields ='__all__'
        permission_classes = [IsAuthenticated]