// change Navbar Background on scroll
// showing to up button on scroll
let myNavbar = document.querySelector('.navbar');
let toTopBtn = document.querySelector(".up");

window.onscroll = function(){
    changeNavbarBackground();
    showUpButton();
}

function changeNavbarBackground(){
    if(window.scrollY > 50){
        myNavbar.classList.add('scroll');
    }else{
        myNavbar.classList.remove('scroll');
    }
}
function showUpButton(){
    if(window.scrollY>=550){
        toTopBtn.classList.add("show");
    }
    else{
        toTopBtn.classList.remove("show");
    }
}
toTopBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
}
//////////////////////////////////////////////////////////////////////////
