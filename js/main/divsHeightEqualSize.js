// Vars
var formationsContentFormation = document.querySelectorAll(".formations-content-formation");
var value_height;



// Functions
// Get height
function setHeight(div) {
    for (let index = 0; index < formationsContentFormation.length; index++) {
        const element = formationsContentFormation[index];
        const children2 = formationsContentFormation[index].children[2];

        element.style.height = (children2.clientHeight + 150) + "px";
    }
}

setHeight(formationsContentFormation)

