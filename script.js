let hanburger = document.getElementById("hanburger-icon");
let navContainer = document.querySelector(".nav-ul-container");

function handleRevealNav(){
    navContainer.classList.toggle("nav_links_container-helper");
    
}
hanburger.addEventListener("click", handleRevealNav);