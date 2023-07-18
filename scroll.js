document.addEventListener('DOMContentLoaded', function() {
    const scrollsLinks = document.querySelectorAll('.scrolls-link');

    scrollsLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault()
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            console.log(targetId);
            console.log(targetElement);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        })
    })
})
