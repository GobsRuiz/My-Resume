var headerMenuLinks = document.querySelectorAll("#header a");


// Functions
// Event listener
headerMenuLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        let href = headerMenuLinks_getHref(event.target);
        let section = headerMenuLinks_getSection(href);
        headerMenuLinks_animationScroll(section.offsetTop);
    })
})

// Get href
function headerMenuLinks_getHref(e) {
    return e.getAttribute('href');
}

// Get section
function headerMenuLinks_getSection(href) {
    return document.querySelector(href);
}

// Animation scroll
function headerMenuLinks_animationScroll(to) {
    window.scroll({
        top: to - 94,
        behavior: "smooth"
    });
}