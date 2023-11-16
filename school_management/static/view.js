var side_bar = document.querySelector(".side-bar");
var ham = document.getElementById("menus");
var close = document.getElementById("close");
ham.addEventListener("click", ()=>{
    side_bar.classList.toggle("show-side");
});
close.addEventListener("click", ()=>{
  side_bar.classList.toggle("show-side");
});
var nav1 = document.querySelector(".navbar1");
var val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav1.classList.add("sticky");
    }
    else{
        nav1.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function () {
  var loadingBar = document.getElementById("loading-bar");
  var messageContainer = document.getElementById("message-container");

  // Animate the loading bar
  var width = 100;
  var interval = setInterval(function () {
      if (width <= 0) {
          clearInterval(interval);
          // Hide the message container
          messageContainer.style.display = "none";
      } else {
          width -= 1;
          loadingBar.style.left = width + "%";
      }
  }, 25); // Adjust the speed of the loading bar animation by changing the interval duration
});

const classwise_student_list = document.getElementById('classwise_student_list');
const student_complete_details = document.getElementById('student_complete_details');
const employee_details = document.getElementById('employee_details');
const past_finance = document.getElementById('past_finance');
const finance_list = document.getElementById('finance_list');

const classwise_list = document.getElementById('classwise_list');


const student_details_form = document.getElementById('student_details_form');

const employee_details_form = document.getElementById('employee_details_form');

const fee = document.getElementById('fee');
const fee_date = document.getElementById('fee_date');

const expenditure = document.getElementById('expenditure');
const expenditure_date = document.getElementById('expenditure_date');

const classwise_table = document.getElementById('classwise_table');
const student_bio = document.getElementById('student_bio');
const employee_bio = document.getElementById('employee_bio');
const fee_record_table = document.getElementById('fee_record_table');
const exp_record_table= document.getElementById('exp_record_table');

function hideAll(){
  finance_list.style.display = 'none';
  classwise_list.style.display = 'none';
  student_details_form.style.display = 'none';
  employee_details_form.style.display = 'none';
  fee_date.style.display = 'none';
  expenditure_date.style.display = 'none';
}

function hidetables(){
  if(window.location.href === "http://127.0.0.1:8000/classwise_students/"){
    classwise_table.style.display = 'none';
  }else if(window.location.href === "http://127.0.0.1:8000/get_student_details/"){
    student_bio.style.display = 'none';
  }else if(window.location.href === "http://127.0.0.1:8000/get_employee_details/"){
    employee_bio.style.display = 'none';
  }else if(window.location.href === 'http://127.0.0.1:8000/past_fee_records/'){
    fee_record_table.style.display = 'none';
  }else if(window.location.href === 'http://127.0.0.1:8000/past_expenditure_records/'){
    exp_record_table.style.display = 'none';
  }
}

classwise_student_list.addEventListener('click',function(){
  hideAll();
  classwise_list.style.display = 'block';
  
  hidetables();
});

student_complete_details.addEventListener('click',function(){
  hideAll();
  student_details_form.style.display = 'block';
  hidetables();
});

employee_details.addEventListener('click',function(){
  hideAll();
  employee_details_form.style.display = 'block';
  hidetables();
});

fee.addEventListener('click',function(){
  hideAll();
  fee_date.style.display = 'block';
  hidetables();
});

expenditure.addEventListener('click',function(){
  hideAll();
  expenditure_date.style.display = 'block'; 
  hidetables();
});

past_finance.addEventListener('click',function(){
  finance_list.style.display = 'block';
});
