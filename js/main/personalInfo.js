// Vars
var personalInfo_titleText_width = document.querySelectorAll(".personaInfor-card-info-titleText");
var value_width;



// Functions
// Get width
function getWidth_personalInfoTitleText() {
    for (let index = 0; index < personalInfo_titleText_width.length; index++) {
        const element = personalInfo_titleText_width[index];

        if(index == 0){
            valueWidth = element.clientWidth;
        }else{
            if(element.clientWidth > valueWidth){
                valueWidth = element.clientWidth;
            }
        }
    }
}getWidth_personalInfoTitleText()

// Set width
function setWidth_personalInfoTitleText() {
    personalInfo_titleText_width.forEach(element => {
        element.style.width = (valueWidth + 30) + "px";
    });
}setWidth_personalInfoTitleText()