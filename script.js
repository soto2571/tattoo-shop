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

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to toggle visibility class based on scroll position
    function toggleVisibility() {
        var content = document.querySelector('.content');
        if (isInViewport(content)) {
            content.classList.add('visible');
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
            content.classList.remove('visible');
        }
    }

    // Event listener for scroll events to trigger visibility change
    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check on page load
    toggleVisibility();

