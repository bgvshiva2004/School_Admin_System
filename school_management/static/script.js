// var overview = document.getElementById("overview");
// var OurTeam = document.getElementById('OurTeam');
//       var Results = document.getElementById('Results');
//       var AboutSchool = document.getElementById('AboutSchool');
//       var ovebtn = document.getElementById('ovebtn');
//       var teambtn = document.getElementById('teambtn');
//       var resbtn = document.getElementById('resbtn');
//       var aboutbtn = document.getElementById('aboutbtn');

//       ovebtn.addEventListener("click", function(){
//         overview.style.display = 'block';
//         OurTeam.style.display = 'none';
//         Results.style.display = 'none';
//         AboutSchool.style.display = 'none';
//         ovebtn.classList.add("active");
//         teambtn.classList.remove("active");
//         resbtn.classList.remove("active");
//         aboutbtn.classList.remove("active");
//       });

//       teambtn.addEventListener("click", function(){
//         overview.style.display = 'none';
//         OurTeam.style.display = 'block';
//         Results.style.display = 'none';
//         AboutSchool.style.display = 'none';
//         ovebtn.classList.remove("active");
//         teambtn.classList.add("active");
//         resbtn.classList.remove("active");
//         aboutbtn.classList.remove("active");
//       });

//       resbtn.addEventListener("click", function(){
//         overview.style.display = 'none';
//         OurTeam.style.display = 'none';
//         Results.style.display = 'block';
//         AboutSchool.style.display = 'none';
//         ovebtn.classList.remove("active");
//         teambtn.classList.remove("active");
//         resbtn.classList.add("active");
//         aboutbtn.classList.remove("active");
//       });

//       aboutbtn.addEventListener("click", function(){
//         overview.style.display = 'none';
//         OurTeam.style.display = 'none';
//         Results.style.display = 'none';
//         AboutSchool.style.display = 'block';
//         ovebtn.classList.remove("active");
//         teambtn.classList.remove("active");
//         resbtn.classList.remove("active");
//         aboutbtn.classList.add("active");
//       });

// var side_bar = document.querySelector(".side-bar");
// var ham = document.getElementById("menus");
// var close = document.getElementById("close");

// ham.addEventListener("click", ()=>{
//     side_bar.classList.toggle("show-side");
// });

// close.addEventListener("click", ()=>{
//   side_bar.classList.toggle("show-side");
// });


var overview = document.getElementById("overview");
      var OurTeam = document.getElementById('OurTeam');
      var Results = document.getElementById('Results');
      var AboutSchool = document.getElementById('AboutSchool');
      var ovebtn = document.getElementById('ovebtn');
      var teambtn = document.getElementById('teambtn');
      var resbtn = document.getElementById('resbtn');
      var aboutbtn = document.getElementById('aboutbtn');

      ovebtn.addEventListener("click", function(){
        overview.style.display = 'block';
        OurTeam.style.display = 'none';
        Results.style.display = 'none';
        AboutSchool.style.display = 'none';
        ovebtn.classList.add("active");
        teambtn.classList.remove("active");
        resbtn.classList.remove("active");
        aboutbtn.classList.remove("active");
      });

      teambtn.addEventListener("click", function(){
        overview.style.display = 'none';
        OurTeam.style.display = 'block';
        Results.style.display = 'none';
        AboutSchool.style.display = 'none';
        ovebtn.classList.remove("active");
        teambtn.classList.add("active");
        resbtn.classList.remove("active");
        aboutbtn.classList.remove("active");
      });

      resbtn.addEventListener("click", function(){
        overview.style.display = 'none';
        OurTeam.style.display = 'none';
        Results.style.display = 'block';
        AboutSchool.style.display = 'none';
        ovebtn.classList.remove("active");
        teambtn.classList.remove("active");
        resbtn.classList.add("active");
        aboutbtn.classList.remove("active");
      });

      aboutbtn.addEventListener("click", function(){
        overview.style.display = 'none';
        OurTeam.style.display = 'none';
        Results.style.display = 'none';
        AboutSchool.style.display = 'block';
        ovebtn.classList.remove("active");
        teambtn.classList.remove("active");
        resbtn.classList.remove("active");
        aboutbtn.classList.add("active");
      });

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