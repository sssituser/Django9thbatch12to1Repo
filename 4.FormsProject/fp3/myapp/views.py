from django.shortcuts import render,redirect,get_object_or_404
from myapp.models import Trainer
from myapp.forms import TrainerForm
# Create your views here.
def home(request):
    return render(request,'myapp/home.html')

def about(request):
    return render(request,'myapp/about.html')

def contact(request):
    return render(request,'myapp/contact.html')

def register(request):
    form = TrainerForm()
    if request.method=='POST':
        form = TrainerForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return redirect("abc")
    return render(request,'myapp/register.html',{'form':form})

def details(request,id):
    trainer = get_object_or_404(Trainer,TrainerId=id)
    return render(request,'myapp/details.html',{'trainer':trainer})

def edit(request,id):
    trainer = get_object_or_404(Trainer,TrainerId=id)
    form = TrainerForm(instance=trainer)
    if request.method == 'POST':
        form = TrainerForm(request.POST,instance=trainer)
        if form.is_valid():
            form.save(commit=True)
            return redirect("abc")
    return render(request,'myapp/edit.html',{'form':form})

def delete(request,id):
    trainer = get_object_or_404(Trainer,TrainerId=id)
    if request.method=="POST":
        Trainer.delete(trainer)
        return redirect("abc")
    return render(request,'myapp/delete.html',{'trainer':trainer})

def trainers(request):
    trainers = Trainer.objects.all()
    return render(request,'myapp/trainers.html',{"trainers_list":trainers})
