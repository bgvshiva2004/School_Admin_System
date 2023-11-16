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


const classwise_student_list = document.getElementById('classwise_student_list');
const classwise_list= document.getElementById('classwise_list');
const past_finance = document.getElementById('past_finance');
const finance_list = document.getElementById('finance_list');
const fee = document.getElementById('fee');
const fee_date = document.getElementById('fee_date');
const expenditure = document.getElementById('expenditure');
const expenditure_date = document.getElementById('expenditure_date');


const student_complete_details=document.getElementById('student_complete_details');
const student_details_form = document.getElementById('student_details_form');

const employee_details =document.getElementById('employee_details');
const employee_details_form=document.getElementById('employee_details_form');

const classwise_table = document.getElementById("classwise_table");
const student_bio = document.getElementById("student_bio");
const employee_bio = document.getElementById("employee_bio");
const fee_record_table =document.getElementById("fee_record_table");
const exp_record_table = document.getElementById("exp_record_table");

function hideAll(){
    classwise_list.style.display = 'none';
    student_details_form.style.display = 'none';
    employee_details_form.style.display = 'none';
    fee_date.style.display = 'none';
    expenditure_date.style.display = 'none';
    classwise_table.style.display = 'none';
    student_bio.style.display = 'none';
    employee_bio.style.display = 'none';
    fee_record_table.style.display = 'none';
    exp_record_table.style.display = 'none';
}

classwise_student_list.addEventListener('click',function(){
    hideAll();
    classwise_list.style.display = 'block';
    classwise_table.style.display = 'block';
});


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
