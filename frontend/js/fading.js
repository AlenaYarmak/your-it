function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && 
        rect.bottom >= 0
    );
}

function checkVisibility() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(function(section) {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Initial check
checkVisibility();

// Check when user scrolls
window.addEventListener('scroll', checkVisibility);
