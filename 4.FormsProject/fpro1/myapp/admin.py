from django.contrib import admin
from myapp.models import Employee
# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display=["EmpId","EmpName","EmpSal"]
    class Meta:
        model = Employee
admin.site.register(Employee,EmployeeAdmin)
