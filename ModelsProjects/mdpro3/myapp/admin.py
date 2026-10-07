from django.contrib import admin
from myapp.models import Product
class ProductAdmin(admin.ModelAdmin):
    list_display =["ProId","ProName","ProPrice"]
    class Meta:
        model = Product
admin.site.register(Product,ProductAdmin)

