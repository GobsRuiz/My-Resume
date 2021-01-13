var headerMenu = document.getElementById("header-menu");
var headerHamburguer = document.getElementById("header_hamburguer");
var headerHamburguer_classAnimate = "hamburguerAnimate";



// Functions
function headerHamburguer_animate() {
    if(headerHamburguer.classList[0] != headerHamburguer_classAnimate){
        headerHamburguer.classList.add(headerHamburguer_classAnimate);
        
        headerHamburguer_menu()

        headerHamburguer.style.transform = `translateX(-${(headerMenu.offsetWidth - 25)}px)`;
    }else{
        headerHamburguer.classList.remove(headerHamburguer_classAnimate)

        headerHamburguer_menu()

        headerHamburguer.style.transform = `translateX(0px)`
    }
}

function headerHamburguer_menu(){
    if(headerMenu.style.transform == "translateX(0px)"){
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

// Event listener - click
headerHamburguer.addEventListener("click", () => {
    headerHamburguer_animate()
})