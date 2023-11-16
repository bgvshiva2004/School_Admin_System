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

const classwiseFee = document.getElementById('classwise_fee');
const classwiseFeeForm = document.getElementById('classwise_fee_form');
const areawise = document.getElementById('areawise');
const transport = document.getElementById('transport');
const activities = document.getElementById('Activities');
const activitiesForm = document.getElementById('activities');
const modify_fee = document.getElementById('modify_fee');
const modify_fee_form=document.getElementById('modify_fee_form');
const modify_transport = document.getElementById('modify_transport');
const modify_transport_form = document.getElementById('modify_transport_form');
    
function hideAllForms() {
    classwiseFeeForm.style.display = 'none';
    transport.style.display = 'none';
    activitiesForm.style.display = 'none';
    modify_fee_form.style.display = 'none';
    modify_transport_form.style.display = 'none';
}
    
classwiseFee.addEventListener('click', function () {
    hideAllForms();
    classwiseFeeForm.style.display = 'block';
});
    
areawise.addEventListener('click', function () {
    hideAllForms();
    transport.style.display = 'block';
});
    
activities.addEventListener('click', function () {
    hideAllForms();
    activitiesForm.style.display = 'block';
});

modify_fee.addEventListener('click',function(){
    hideAllForms();
    modify_fee_form.style.display = 'block';
});

modify_transport.addEventListener('click',function(){
    modify_transport_form.style.display = 'block';
})
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