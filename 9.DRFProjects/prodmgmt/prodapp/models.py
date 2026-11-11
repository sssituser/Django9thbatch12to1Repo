from django.db import models

# Create your models here.
class Product(models.Model):
    ProductId = models.IntegerField(primary_key=True)
    ProductName = models.CharField(max_length=40)
    ProductPrice = models.IntegerField()