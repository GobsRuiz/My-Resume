var header = document.getElementById("header");
var headerContainer = document.getElementById("header_container");



// Functions
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 50){
        headerContainer.style.height = "10vh";
    }else{
        headerContainer.style.height = "var(--header_width)";
    }
})