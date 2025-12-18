const toggleButton = document.querySelector(".toggle");
const saveTheme = localStorage.getItem ("theme");

//saves the darkmode/lightmode throughout webpage//
if (saveTheme === "dark") {
    document.body.classList.add("dark");
    toggleButton.textContent = "LIGHT MODE"; } 
    else {
        toggleButton.textContent ="DARK MODE";

    }


//the toggle//
toggleButton.addEventListener("click", ()=> { 
  //when clicked, dark mode is activated //
document.body.classList.toggle("dark");
  //adding "dark" into the website //


const isDark = document.body.classList.contains("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "LIGHT MODE";
    //dark mode is on//
  } else {

    localStorage.setItem("theme", "light");
    toggleButton.textContent = "DARK MODE";  //dark mode is off//
  }
});


//jquery slide down//
$(document).ready(function(){
      $("#flip").click(function(){          
        $("#panel").slideToggle("slow"); 
      });
    });

    //when clicked, #panel will slide down//