from django.db import models
from django.utils import timezone
# Create your models here.
class Student(models.Model):
    adm_no = models.CharField(primary_key=True, max_length=50)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(
        max_length=10,
        choices=[("male", "Male"), ("female", "Female")],
        null=True,
        blank=True
    )
    dob = models.DateField(null=True, blank=True)
    aadhar = models.CharField(max_length=12, null=True, blank=True)
    student_class = models.CharField(
        max_length=10,
        choices=[
            ("nursery", "Nursery"),
            ("pp-I", "PP-I"),
            ("pp-II", "PP-II"),
            ("I", "I"),
            ("II", "II"),
            ("III", "III"),
            ("IV", "IV"),
            ("V", "V"),
            ("VI", "VI"),
            ("VII", "VII"),
            ("VIII", "VIII"),
            ("IX", "IX"),
            ("X", "X"),
            ("XI", "XI"),
            ("XII", "XII"),
        ],
        null=True,
        blank=True
    )
    section = models.CharField(max_length=50, null=True, blank=True)
    mother_tongue = models.CharField(max_length=50, null=True, blank=True)
    father_name = models.CharField(max_length=50, null=True, blank=True)
    father_occupation = models.CharField(max_length=50, null=True, blank=True)
    mother_name = models.CharField(max_length=50, null=True, blank=True)
    mother_occupation = models.CharField(max_length=50, null=True, blank=True)
    contact = models.CharField(max_length=15, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)

class Transportation(models.Model):
    area_id = models.CharField(primary_key=True,max_length=10)
    area_name = models.CharField(max_length=20,null=True,blank=True)
    transport_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)

class Classwise_Fee(models.Model):
    student_class = models.CharField(
        max_length=10,
        choices=[
            ("nursery", "Nursery"),
            ("pp-I", "PP-I"),
            ("pp-II", "PP-II"),
            ("I", "I"),
            ("II", "II"),
            ("III", "III"),
            ("IV", "IV"),
            ("V", "V"),
            ("VI", "VI"),
            ("VII", "VII"),
            ("VIII", "VIII"),
            ("IX", "IX"),
            ("X", "X"),
            ("XI", "XI"),
            ("XII", "XII"),
        ],
        primary_key=True
    )
    tuition_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)
    exam_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)
    miscellaneous_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)
    
class FeeDetails(models.Model):
    adm_no = models.OneToOneField(Student, on_delete=models.CASCADE, primary_key=True)
    student_class = models.ForeignKey(Classwise_Fee, on_delete=models.CASCADE)
    section = models.CharField(max_length=50, null=True, blank=True)
    student_name = models.CharField(max_length=50, null=True, blank=True)
    tuition_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    exam_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)
    miscellaneous_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    area_id = models.ForeignKey(Transportation, on_delete=models.CASCADE)
    transport_fee = models.DecimalField(max_digits=10,decimal_places=2,null=True)
    fee_concession = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    fee_paid = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    balance_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.adm_no
    
class StudentAcademicGrades(models.Model):
    adm_no = models.ForeignKey('Student',on_delete=models.CASCADE,default='1234')
    academic_year = models.CharField(max_length=10, null=True,blank=True)
    student_name = models.CharField(max_length=100,null=True,blank=True)
    student_class = models.CharField(max_length=30,null=True,blank=True)
    section = models.CharField(max_length=30,default = "A")
    first_language = models.DecimalField(max_digits=5, decimal_places=2)
    second_language = models.DecimalField(max_digits=5, decimal_places=2)
    third_language = models.DecimalField(max_digits=5, decimal_places=2)
    mathematics = models.DecimalField(max_digits=5, decimal_places=2)
    science = models.DecimalField(max_digits=5, decimal_places=2)
    social = models.DecimalField(max_digits=5, decimal_places=2)
    computers = models.DecimalField(max_digits=5, decimal_places=2)
    overall_grade = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"Academic Grades for Admission No. {self.adm_no}"
class Employee(models.Model):
    employee_id = models.CharField(max_length=10, primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    qualification = models.CharField(max_length=100)
    experience = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    contact = models.CharField(max_length=15)
    
    WORK_TYPES = [
        ('teaching', 'Teaching'),
        ('non_teaching', 'Non Teaching'),
    ]
    work_type = models.CharField(max_length=15, choices=WORK_TYPES)
    
    working_hours = models.CharField(max_length=20, default='0')
    
    subject_id = models.CharField(max_length=10, default='0')
    subject = models.CharField(max_length=100, default='0')

    role = models.CharField(max_length=100, default='teacher')
    
    account_no = models.BigIntegerField()
    bank = models.CharField(max_length=100)
    ifsc_code = models.CharField(max_length=20)
    salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.employee_id})"
    
class FeeRecord(models.Model):
    receipt_no = models.AutoField(primary_key=True)
    date = models.DateField()
    adm_no = models.ForeignKey('FeeDetails', on_delete=models.CASCADE)
    student_name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=30)
    section = models.CharField(max_length=30)
    total_fee = models.DecimalField(max_digits=10, decimal_places=2)
    fee_paid = models.DecimalField(max_digits=10, decimal_places=2)
    balance_fee = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.receipt_no
    
class ExpenditureRecord(models.Model):
    date = models.DateField()
    purpose = models.CharField(max_length=200)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

class Cocurriculars(models.Model):
    activity_id = models.CharField(max_length=20,primary_key=True)
    activity_name = models.CharField(max_length=50)
    trainer = models.CharField(max_length=20,null=True,blank=True)
    description = models.CharField(max_length=100,null=True,blank=True)

class Cocurricular_performance(models.Model):
    adm_no = models.ForeignKey('Student',on_delete=models.CASCADE,default='1234')
    student_name = models.CharField(max_length=100,null=True,blank=True)
    student_class = models.CharField(max_length=30,null=True,blank=True)
    section = models.CharField(max_length=30,null=True,blank=True) 
    activity_id = models.ForeignKey('Cocurriculars',on_delete=models.CASCADE)
    activity_name = models.CharField(max_length=50)
    performance_remark = models.CharField(max_length=200)