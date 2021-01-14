// // Vars
// // Personal info
// var personalInfo_titleText = document.querySelectorAll(".personaInfor-card-info-titleText");

// // Skill
// var skillContent = document.getElementById("skills-content");
// var skillsContentSkill = document.querySelectorAll(".skills-content-skill");

// // Contact
// var contactInfo = document.querySelectorAll(".contact-content-info");
// var contactSocialNetworks = document.getElementById("contact-socialNetworks");

// var value_width;



// // Functions
// // Get width
// function getHigherWidth(div) {
//     for (let index = 0; index < div.length; index++) {
//         const element = div[index];

//         if(index == 0){
//             value_width = element.clientWidth;
//         }else{
//             if(element.clientWidth > value_width){
//                 value_width = element.clientWidth;
//             }
//         }
//     }
//     setWidthInDivs(div)
// }

// // Set width
// function setWidthInDivs(div) {
//     // Increase the value
//     if(div[0].classList[0] == personalInfo_titleText[0].classList[0]) {
//         if(window.innerWidth > 500){
//             value_width += 50;
//         }else{
//             value_width += 10;
//         }
//     }else if(div[0].classList[0] == skillsContentSkill[0].classList[0]){
//         if(window.innerWidth >= 1024){
//             value_width += 50;
//         }
//     }else if(div[0].classList[0] == contactInfo[0].classList[0]){
//         if(window.innerWidth >= 1024){
//             value_width += 100;
//         }else{
//             value_width += 25;
//         }
//     }

//     // Set value

//     // Contact
//     // Social networks
//     contactSocialNetworks.style.width = value_width + "px";
// }


// // Calling functions
// getHigherWidth(personalInfo_titleText)
// getHigherWidth(skillsContentSkill)
// getHigherWidth(contactInfo)
