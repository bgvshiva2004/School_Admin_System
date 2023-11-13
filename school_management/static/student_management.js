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
const newEnrollment = document.getElementById('new_enrollment');
const newEnrollmentDetails = document.getElementById('new_enrollment_details');
const existingStudent = document.getElementById('existing_student');
const options = document.getElementById('options');
const fee = document.getElementById('fee');
const feeDetails = document.getElementById('fee_details');
const grades = document.getElementById('grades-entry');
const academicGrades = document.getElementById('academic_grades');
const fetch_fill= document.getElementById('fetch_fill');
const cc_form = document.getElementById('cc_form');
const activities= document.getElementById('activities');
const modify_details_form = document.getElementById('modify_details_form');
const modify_details = document.getElementById('modify_details');
function hideAllForms() {
    newEnrollmentDetails.style.display = 'none';
    options.style.display = 'none';
    feeDetails.style.display = 'none';
    academicGrades.style.display = 'none';
    cc_form.style.display = 'none';
    modify_details_form.style.display = 'none';
}
modify_details.addEventListener('click',function(){
    hideAllForms();
    options.style.display = 'block';
    modify_details_form.style.display = 'block';
});
newEnrollment.addEventListener('click', function () {
    hideAllForms();
    newEnrollmentDetails.style.display = 'block';
});
existingStudent.addEventListener('click', function () {
    hideAllForms();
    options.style.display = 'block';
});
fee.addEventListener('click', function () {
    hideAllForms();
    options.style.display = 'block';
    feeDetails.style.display = 'block';
});
grades.addEventListener('click', function () {
    hideAllForms();
    options.style.display = 'block';
    academicGrades.style.display = 'block';
});
activities.addEventListener('click',function(){
    hideAllForms();
    options.style.display = 'block';
    cc_form.style.display = 'block';
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