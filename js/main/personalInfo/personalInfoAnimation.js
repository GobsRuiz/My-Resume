// Personal info
var personalInfoCard = document.getElementById("personalInfo-card");
var personalInfoCardImage = document.getElementById("personalInfo-card-image");
var personalInfoCardInfo = document.getElementById("personaInfor-card-info");
var personalInfoSocialNetworks = document.getElementById("personalInfo-socialNetworks");

// About
var about = document.getElementById("about");
var aboutContent_h3 = document.getElementById("about-content-title");
var aboutContent_p = document.querySelectorAll(".about-content-text");

// Skills
var skills = document.getElementById("skills")
var skillsSectionTitle = document.querySelector("#skills .section-title h3");
var skillsContentRowLeft = document.querySelector(".skills-content-row-left");
var skillsContentRowRight = document.querySelector(".skills-content-row-right");

// Formations
var formations = document.getAnimations("formations");

// Experiences





// Functions
// Event listener load
window.addEventListener("load", () => {
    // Personal info
    elementAnimate_opacity(personalInfoCard, 450)

    elementAnimate_translate(personalInfoCardImage, "translateX(-100%)", "translateY(0)")
    elementAnimate_opacity(personalInfoCardImage, 600)

    elementAnimate_translate(personalInfoCardInfo, "translateX(100%)", "translateX(0)")
    elementAnimate_opacity(personalInfoCardInfo, 600)
})



// Scroll
function main_windowScroll(div, value_top,value_translateFrom, value_translateTo) {
    window.addEventListener("scroll", () => {
        if(div.style.opacity != "1"){
            if(window.pageYOffset >= div.offsetTop - value_top) {
                elementAnimate_translate(div, value_translateFrom, value_translateTo)
                elementAnimate_opacity(div, 600)
            }
        }
    })
}
// Personal info
main_windowScroll(personalInfoSocialNetworks, 460, "translateY(100%)", "translateY(0)")

// About
main_windowScroll(aboutContent_h3, 590, "0", "0")
aboutContent_p.forEach(element => {
    main_windowScroll(element, 520, "translateY(40%)", "translateY(0)")
});

// Skills
main_windowScroll(skillsSectionTitle, 570, "0", "0")
main_windowScroll(skillsContentRowLeft, 470, "translateX(-50%)", "translateY(0)")
main_windowScroll(skillsContentRowRight, 470, "translateX(50%)", "translateY(0)")



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
}