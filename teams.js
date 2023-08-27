var hamburger=document.querySelector(".hamburger");
var menu=document.querySelector(".nav-menu");
var body=document.querySelector("body")

hamburger.addEventListener("click",() =>{
    console.log("clicked")
hamburger.classList.toggle("active")
menu.classList.toggle("active")
body.classList.toggle("active")
})

