from django.contrib import admin
from .models import Student,Transportation,Classwise_Fee,FeeDetails,Employee,StudentAcademicGrades,FeeRecord,ExpenditureRecord
# Register your models here.
admin.site.register(Student)
admin.site.register(Transportation)
admin.site.register(Classwise_Fee)
admin.site.register(FeeDetails)
admin.site.register(Employee)
admin.site.register(StudentAcademicGrades)
admin.site.register(FeeRecord)
admin.site.register(ExpenditureRecord)

