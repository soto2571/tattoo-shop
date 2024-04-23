document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    });
}
});