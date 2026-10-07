from django.contrib import admin
from myapp.models import Student
# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display=["id","StuId","StuName","StuMarks"]
    class Meta:
        model = Student
        fields='__all__'
admin.site.register(Student,StudentAdmin)
