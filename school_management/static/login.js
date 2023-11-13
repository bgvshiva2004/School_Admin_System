var side_bar = document.querySelector(".side-bar");
        var ham = document.getElementById("menus");
        var close = document.getElementById("close");

        ham.addEventListener("click", ()=>{
            side_bar.classList.toggle("show-side");
        });

        close.addEventListener("click", ()=>{
        side_bar.classList.toggle("show-side");
        });

        var password = document.getElementById("password");
        var span = document.querySelector("span");
        function toggleShow(){
            if (password.type === "password") {
                password.setAttribute('type', 'text');
                span.innerHTML = "<i class='fa-solid fa-eye'></i>";
                span.style.color = "#fff";
            }
            else{
                password.setAttribute('type','password') ;
                span.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
                span.style.color = "black";
            }
        }

        var student = document.getElementById("student");
        var mentor = document.getElementById("mentor");
        function showStudent(){
            student.style.display = "flex";
            mentor.style.display = "none";
        }
        function showMentor(){
            student.style.display = "none";
            mentor.style.display = "flex";
        }

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