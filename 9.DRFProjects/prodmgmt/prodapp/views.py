from rest_framework import viewsets
from prodapp.Serializers import ProductSerializer
from prodapp.models import Product

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer
