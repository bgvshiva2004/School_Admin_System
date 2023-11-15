const todayFinance = document.getElementById('today');
const list = document.getElementById('today_finance');
const feeCollection = document.getElementById('today_fee');
const expenditure = document.getElementById('today_expenditure');
const feeForm = document.getElementById('feeForm');
const expenditureForm = document.getElementById('expenditureForm');

todayFinance.addEventListener('click', () => {
    feeForm.classList.add('hidden');
    expenditureForm.classList.add('hidden');
    list.classList.remove('hidden');
});

feeCollection.addEventListener('click', () => {
    feeForm.classList.remove('hidden');
    expenditureForm.classList.add('hidden');
});

expenditure.addEventListener('click', () => {
    feeForm.classList.add('hidden');
    expenditureForm.classList.remove('hidden');
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

var side_bar = document.querySelector(".side-bar");
var ham = document.getElementById("menus");
var close = document.getElementById("close")
ham.addEventListener("click", ()=>{
    side_bar.classList.toggle("show-side");
})
close.addEventListener("click", ()=>{
side_bar.classList.toggle("show-side");
})
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