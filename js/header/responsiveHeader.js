var headerMenu = document.getElementById("header-menu");
var headerLogo_h1 = document.querySelector("#header-logo h1");
var headerHamburguer = document.getElementById("header_hamburguer");
var headerHamburguer_classAnimate = "hamburguerAnimate";



// Functions
function headerHamburguer_animate() {
    if(headerHamburguer.classList[0] != headerHamburguer_classAnimate){
        headerHamburguer.classList.add(headerHamburguer_classAnimate);
        
        headerHamburguer_menu("open")

        if(window.innerWidth <= 400){
            headerHamburguer_title("open")
        }

        if(window.innerWidth == 600 && window.innerHeight == 1024){
            headerHamburguer_title("open")
        }

        headerHamburguer.style.transform = `translateX(-${(headerMenu.offsetWidth - 20)}px)`;
    }else{
        headerHamburguer.classList.remove(headerHamburguer_classAnimate)

        headerHamburguer_menu("close")

        if(window.innerWidth <= 400){
            headerHamburguer_title("close")
        }

        if(window.innerWidth == 600 && window.innerHeight == 1024){
            headerHamburguer_title("close")
        }

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
        headerLogo_h1.style.fontSize = "var(--headerLogoh1_fontSize)";
    }
}

// Event listener - click
headerHamburguer.addEventListener("click", () => {
    headerHamburguer_animate()
})