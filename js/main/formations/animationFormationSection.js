var formationsContentFormation = document.querySelectorAll(".formations-content-formation");
var formationsContentFormation_hr = document.querySelectorAll(".formations-content-formation-hr");
var formationsContentFormation_span = document.querySelectorAll(".formations-content-formation-ball");



// Functions
// Scroll animation
function dataAnimateFormationScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    if((windowTop + 120) > formationsContentFormation[0].offsetTop){
        formationsContentFormation_hr.forEach(element => {
            if(element.style.opacity != 1){
                let value_from = dataAnimate_getValue_from("bottom");
                dataAnimate_elementAnimate(element, value_from);
            }
        });
    }

    formationsContentFormation.forEach(element => {
        if(windowTop > element.offsetTop) { 
            let childrens = element.children;

            for (let i = 0; i < childrens.length; i++) {
                const children = childrens[i];
                if(children.classList != "formations-content-formation-hr"){
                    let position = children.getAttribute("data-animateFormation");

                    // function is found in the file animationSections.js
                    let value_from = dataAnimate_getValue_from(position);

                    // function is found in the file animationSections.js
                    dataAnimate_elementAnimate(children, value_from);
                }
            }
        }
        
    });
}

// Event listener scroll
window.addEventListener("scroll", () => {
    // This variable is found in the file animationSections.js
    if(eventListenerScroll_stop != 1){
        dataAnimateFormationScroll();
    }
})