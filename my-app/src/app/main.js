document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to sections when clicking on navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Enable scrolling between sections using the mouse wheel
    let isScrolling;
    window.addEventListener('scroll', function () {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            body.style.overflow = 'hidden';
        }, 66);
        body.style.overflow = 'visible';
    });
});
