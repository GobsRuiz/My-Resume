var headerMenu = document.getElementById("header-menu");
var headerLogo_h1 = document.querySelector("#header-logo h1");
var headerHamburguer = document.getElementById("header_hamburguer");
var headerHamburguer_classAnimate = "hamburguerAnimate";



// Functions
function headerHamburguer_animate() {
    if(headerHamburguer.classList[0] != headerHamburguer_classAnimate){
        headerHamburguer.classList.add(headerHamburguer_classAnimate);
        
        headerHamburguer_menu("open")

        if(window.innerWidth <= 850){
            headerHamburguer_title("open")
        }

        let negativeValue = 0;
        if(window.innerWidth <= 700){
            negativeValue = 0;
        }else{
            negativeValue = 20;
        }
        headerHamburguer.style.transform = `translateX(-${(headerMenu.offsetWidth - negativeValue)}px)`;
    }else{
        headerHamburguer.classList.remove(headerHamburguer_classAnimate)

        headerHamburguer_menu("close")

        headerHamburguer_title("close")

        headerHamburguer.style.transform = `translateX(0px)`
    }
}

function headerHamburguer_menu(animation){
    if(animation == "close"){
        headerMenu.style.transform = "translateX(110%)"

        setTimeout(() => {
            headerMenu.style.display = "none";
        }, 305);
    }else{
        headerMenu.style.display = "block";

        setTimeout(() => {
            headerMenu.style.transform = "translateX(0px)"
        }, 1);
    }
}

function headerHamburguer_title(animation) {
    if(animation == "open"){
        headerLogo_h1.style.fontSize = "1.5vh";
    }else{
        headerLogo_h1.style.fontSize = "var(--headerLogo_fontSize)";
    }
}

// Event listener - click
headerHamburguer.addEventListener("click", () => {
    headerHamburguer_animate()
})