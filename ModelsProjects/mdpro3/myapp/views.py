from django.shortcuts import render
from myapp.models import Product
# Create your views here.
def home(request):
    products = Product.objects.all()
    prodict={"pro_list":products}
    for pro in products:
        print(f'{pro.ProId}\t{pro.ProName}\t{pro.ProPrice}')
    return render(request,'home.html',prodict)