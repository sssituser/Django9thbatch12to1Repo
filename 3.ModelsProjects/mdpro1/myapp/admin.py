from django.contrib import admin
from myapp.models import Employee
# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display=["id","EmpId",'EmpName',"EmpSal"]
    class Meta:
        model = Employee
        fields ='__all__'
admin.site.register(Employee,EmployeeAdmin)