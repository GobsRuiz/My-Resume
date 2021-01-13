// Personal info [dataAnimate]
var personalInfoDataAnimate = document.querySelectorAll("#personalInfo [data-animate]");
// Select all [data-animate]
var dataAnimate = document.querySelectorAll("[data-animate]");
// Div - Personal info social networks
var personalInfoSocialNetworks = document.getElementById("personalInfo-socialNetworks"); 
// Div - Contact social networks
var contactSocialNetworks = document.getElementById("contact-socialNetworks"); 
var eventListenerScroll_stop = 0;


// Functions
// Load animation
function dataAnimateLoad() {
    personalInfoDataAnimate.forEach(element => {
        if(element.id != "personalInfo-socialNetworks") {
            let position = element.getAttribute("data-animate");
            let value_from = dataAnimate_getValue_from(position);
    
            dataAnimate_elementAnimate(element, value_from);
        }
    });
}

// Scroll animation
function dataAnimateScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    const windowTop2 = window.pageYOffset + ((window.innerHeight * 3) / 5);

    dataAnimate.forEach(element => {
        if(element.style.opacity != 1){
            if(element.id == personalInfoSocialNetworks.id){
                if(windowTop2 > element.offsetTop){
                    dataAnimate_getPosition(element)
                }
            }else if(windowTop > element.offsetTop) {
                dataAnimate_getPosition(element)
    
                if(element.id == contactSocialNetworks.id){
                    eventListenerScroll_stop = 1;
                }
            }
        }
    });
}

// Get position
function dataAnimate_getPosition(element) {
    let position = element.getAttribute("data-animate");
    let value_from = dataAnimate_getValue_from(position);

    dataAnimate_elementAnimate(element, value_from);
}

// Get value_from
function dataAnimate_getValue_from(position) {
    let value_from;

    if(position == "left"){
        value_from = "translateX(-20vh)";
    }else if(position == "right"){
        value_from = "translateX(20vh)";
    }else if(position == "top"){
        value_from = "translateY(-10vh)";
    }else if(position == "bottom"){
        value_from = "translateY(10vh)";
    }else if(position == "bottom-absolute") {
        value_from = "translateX(-50%) translateY(10vh)";
    }else if(position == "opacity") {
        value_from = "0";
    }

    return value_from;
}

// Element.animate({})
function dataAnimate_elementAnimate(element, value_from) {
    element.animate([
        {transform: value_from},
        {transform: "0"}
    ], {
        duration: 500,
        easing: "ease"
    });

    element.animate([
        {opacity: "0"},
        {opacity: "1"}
    ], {
        duration: 550,
        easing: "ease-out"
    });

    element.style.opacity = "1";
}

// Event listener load
window.addEventListener("load", () => {
    dataAnimateLoad();
})
// Event listener scroll
window.addEventListener("scroll", () => {
    if(eventListenerScroll_stop != 1){
        dataAnimateScroll();
    }
})
