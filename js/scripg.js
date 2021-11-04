var scrollPosition = window.scrollY;
var nav = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        nav.classList.add("navbar--scrolled");
    } else {
        nav.classList.remove("navbar--scrolled");
    }
});