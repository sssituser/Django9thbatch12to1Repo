from django import forms
from myapp.models import Trainer

class TrainerForm(forms.ModelForm):
    TrainerId = forms.IntegerField()
    TrainerName = forms.CharField(max_length=40)
    TrainerSal = forms.IntegerField()
    class Meta:
        model = Trainer
        fields ='__all__'
        
