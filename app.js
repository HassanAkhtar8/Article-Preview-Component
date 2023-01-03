const btn = document.querySelector(".rel");
const share = document.querySelector(".social-container");
const info = document.querySelector(".info");
btn.addEventListener("click", function(){
    share.classList.toggle("visi");
    info.classList.toggle("info-cl");

});


