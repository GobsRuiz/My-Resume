// Vars
var personalInfo_titleText_width = document.querySelectorAll(".personaInfor-card-info-titleText");
var skillContent = document.getElementById("skills-content");
var skillsContentSkill = document.querySelectorAll(".skills-content-skill");
var value_width;



// Functions
// Get width
function getHigherWidth(div) {
    for (let index = 0; index < div.length; index++) {
        const element = div[index];

        if(index == 0){
            value_width = element.clientWidth;
        }else{
            if(element.clientWidth > value_width){
                value_width = element.clientWidth;
            }
        }
    }

    console.log("n");
    setWidthInDivs(div)
}

// Set width
function setWidthInDivs(div) {
    if(div[0].classList[0] == personalInfo_titleText_width[0].classList[0]) {
        value_width += 30;
    }

    div.forEach(element => {
        element.style.minWidth = value_width + "px";
        element.style.maxWidth = value_width + "px";
        console.log(element.clientWidth)
    });

    // setTimeout(() => {
    //     skillContent.style.display = "flex";
    // }, 10);
}


// Calling functions
getHigherWidth(personalInfo_titleText_width)
getHigherWidth(skillsContentSkill)
