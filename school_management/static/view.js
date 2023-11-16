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

        classwise_student_list.addEventListener('click',function(){
          fee_date.style.display = 'none';
          expenditure_date.style.display = 'none';
            student_details_form.style.display = 'none';
            employee_details_form.style.display = 'none';
            finance_list.style.display = 'none';
            classwise_list.style.display = 'block';
        });

        student_complete_details.addEventListener('click',function(){
          fee_date.style.display = 'none';
          expenditure_date.style.display = 'none';
            classwise_list.style.display = 'none';
            employee_details_form.style.display = 'none';
            finance_list.style.display = 'none';
            student_details_form.style.display = 'block';
        });

        employee_details.addEventListener('click',function(){
          fee_date.style.display = 'none';
          expenditure_date.style.display = 'none';
            classwise_list.style.display = 'none';
            student_details_form.style.display = 'none';
            finance_list.style.display = 'none';
            employee_details_form.style.display = 'block';
        });

        past_finance.addEventListener('click',function(){
          classwise_list.style.display = 'none';
          student_details_form.style.display = 'none';
          employee_details_form.style.display = 'none';
          fee_date.style.display = 'none';
          expenditure_date.style.display = 'none';
          finance_list.style.display = 'block';
        });

        fee.addEventListener('click',function(){
          expenditure_date.style.display = 'none';
          fee_date.style.display = 'block';
        });
        expenditure.addEventListener('click',function(){
          fee_date.style.display = 'none';
          expenditure_date.style.display = 'block';
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
