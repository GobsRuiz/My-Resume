// Personal info
var personalInfoCard = document.getElementById("personalInfo-card");
var personalInfoCardImage = document.getElementById("personalInfo-card-image");
var personalInfoCardInfo = document.getElementById("personaInfor-card-info");
var personalInfoSocialNetworks = document.getElementById("personalInfo-socialNetworks");

// About
var aboutContent_h3 = document.getElementById("about-content-title");
var aboutContent_p = document.querySelectorAll(".about-content-text");

// Skills
var skillsSectionTitle = document.querySelector("#skills .section-title h3");
var skillsContentRowLeft = document.querySelector(".skills-content-row-left");
var skillsContentRowRight = document.querySelector(".skills-content-row-right");

// Formations
var formationsSectionTitle = document.querySelector("#formations .section-title h3");
var formationsContentFormationLeft = document.querySelectorAll(".formations-content-formation-left");
var formationsContentFormationRight = document.querySelectorAll(".formations-content-formation-right");
var formationsContentFormationball = document.querySelectorAll(".formations-content-formation-ball");
var formationsContentFormationhr = document.querySelectorAll(".formations-content-formation-hr");

// Experiences
var experiencesSectionTitle = document.querySelector("#experiences .section-title h3");

// Contact
var contactSectionTitle = document.querySelector("#contact .section-title h3");
var contactContentInfoLeft = document.querySelectorAll(".contact-content-info-left");
var contactContentInfoRight = document.querySelectorAll(".contact-content-info-right");
var contactSocialNetworks = document.getElementById("contact-socialNetworks");


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


// ----------------------------------------------------
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
main_windowScroll(skillsSectionTitle, 570, "translateX(0)", "translateX(0)")
main_windowScroll(skillsContentRowLeft, 470, "translateX(-50%)", "translateX(0)")
main_windowScroll(skillsContentRowRight, 470, "translateX(50%)", "translateX(0)")


// Formations
main_windowScroll(formationsSectionTitle, 570, "translateX(0)", "translateX(0)")

var formationsContentFormation_valueTop = -1750;
formationsContentFormation_for(formationsContentFormationLeft, "translateX(-50%)", "translateX(0)")
formationsContentFormation_for(formationsContentFormationRight, "translateX(50%)", "translateX(0)")
formationsContentFormation_for(formationsContentFormationball, "translateY(500%)", "translateY(0)")

function formationsContentFormation_for(div, value_translateFrom, value_translateTo) {
    for (let i = 0; i < div.length; i++) {
       const element = div[i];
       if(i != 0){
        formationsContentFormation_valueTop -= 150;
       }
       
       main_windowScroll(element, formationsContentFormation_valueTop, value_translateFrom, value_translateTo);

       if(div.length - i == "1"){
        formationsContentFormation_valueTop = -1750;
       }
   }
}

formationsContentFormationhr.forEach(element => {
    main_windowScroll(element, -1750, "translateY(300%)", "translateY(0)")
});

// Experiences
main_windowScroll(experiencesSectionTitle, 560, "translateX(0)", "translateX(0)");

// Contact
main_windowScroll(contactSectionTitle, 560, "translateX(0)", "translateX(0)");
contactContentInfoLeft.forEach(element => {
    main_windowScroll(element, 560, "translateX(-50%)", "translateX(0)");
});
contactContentInfoRight.forEach(element => {
    main_windowScroll(element, 560, "translateX(50%)", "translateX(0)");
});
main_windowScroll(contactSocialNetworks, 560, "translateY(60%)", "translateX(0)");



// ----------------------------------------------------
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