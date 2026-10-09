from django import forms
from myapp.models import Employee

class EmployeeForm(forms.ModelForm):
    EmpId = forms.IntegerField()
    EmpName = forms.CharField(max_length=50)
    EmpSal = forms.DecimalField(max_digits=10,decimal_places=2)
    class Meta:
        model = Employee
        fields ='__all__'
    
    