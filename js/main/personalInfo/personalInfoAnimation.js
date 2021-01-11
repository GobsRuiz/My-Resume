var personalInfoCard = document.getElementById("personalInfo-card");
var personalInfoCardImage = document.getElementById("personalInfo-card-image");
var personalInfoCardInfo = document.getElementById("personaInfor-card-info");
var personalInfoSocialNetworks = document.getElementById("personalInfo-socialNetworks");



// Functions
// Event listener load
window.addEventListener("load", () => {
    elementAnimate_opacity(personalInfoCard, 450)

    elementAnimate_translate(personalInfoCardImage, "translateX(-100%)")
    elementAnimate_opacity(personalInfoCardImage, 600)

    elementAnimate_translate(personalInfoCardInfo, "translateX(100%)")
    elementAnimate_opacity(personalInfoCardInfo, 600)
})

// Scroll
window.addEventListener("scroll", () => {
    if(personalInfoSocialNetworks.style.opacity != "1"){
        if(window.pageYOffset >= 150) {
            elementAnimate_translate(personalInfoSocialNetworks, "translateY(100%)", "translateY(0)")
            elementAnimate_opacity(personalInfoSocialNetworks, 500)
        }
    }
})

// Element animate
// TranslateX
function elementAnimate_translate(div, value_translateFrom, value_translateTo) {
    div.animate([
        // keyframes
        { transform: `${value_translateFrom}` },
        { transform: `${value_translateTo}` },
      ], {
        // timing options
        duration: 600,
        // Effect
        easing: "ease-out"


        // easing: "ease-in-out"
        // easing: "ease-in"
        // easing: "ease"
    });
}
// Opacity
function elementAnimate_opacity(div, value_time) {
    div.animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
      ], {
        // timing options
        duration: value_time,
        // Effect
        easing: "ease-in"
    });

    div.style.opacity = "1";
    console.log(div)
}