from django.db import models
class Product(models.Model):
    ProId = models.IntegerField(primary_key=True)
    ProName = models.CharField(max_length=30)
    ProPrice = models.IntegerField()
