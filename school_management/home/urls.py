from django.contrib import admin
from django.urls import path,include
from home import views

urlpatterns = [
    path('',views.index,name='index'),
    path('login/',views.login,name='login'),
    # path('/admission',views.admission,name='admission')
    path('academics/',views.academics,name='academics'),
    path('life/',views.life,name='life'),
    # path('/about',views.about,name='about')
    path('admin_interface/',views.admin_interface,name='admin_interface'),
    path('entry/',views.entry,name='entry'),
    path('student_management/',views.student_management,name='student_management'),
    path('employee_management/',views.employee_management,name='employee_management'),
    path('finance/',views.finance,name="finance"),
    path('new_student/',views.new_student,name='new_student'),
    path('academic_grades/',views.academic_grades,name="academic_grades"),
    path('fee/',views.fee,name='fee'),
    path('new_employee/',views.new_employee,name='new_employee'),
    path('defaults/',views.defaults,name='defaults'),
    path('classwise_fee/',views.classwise_fee,name='classwise_fee'),
    path('transport/',views.transport,name="transport"),
    path('view/',views.view,name='view'),
    path('classwise_students/',views.classwise_students,name='classwise_students'),
    path('get_student_details/',views.get_student_details,name='get_student_details'),
    path('get_employee_details/',views.get_employee_details,name='get_employee_details'),
    path('today_expenditure/',views.today_expenditure,name='today_expenditure'),
    path('today_fee_record/',views.today_fee_record,name='today_fee_record'),
    path('past_fee_records/',views.past_fee_records,name='past_fee_records'),
    path('past_expenditure_records/',views.past_expenditure_records,name='past_expenditure_records'),
    path('activities/',views.activities,name='activities'),
    path('cocurricular_performance/',views.cocurricular_performance,name='cocurricular_performance'),
    path('logout/',views.logout,name='logout'),
    path('modify_employee_details/',views.modify_employee_details,name='modify_employee_details'),
    path('modify_work_details/',views.modify_work_details,name='modify_work_details'),
    path('modify_salary_details/',views.modify_salary_details,name='modify_salary_details'),
    path('modify_student_details/',views.modify_student_details,name='modify_student_details'),
    path('modify_fee/',views.modify_fee,name='modify_fee'),
    path('modify_transport/',views.modify_transport,name='modify_transport'),
]