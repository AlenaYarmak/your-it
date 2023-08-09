const hamburgerCheckbox = document.getElementById('check');
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
const burgerIcon = document.querySelector('.burger-icon');
const burgerLinks = document.querySelectorAll('.burger-link');

hamburgerCheckbox.addEventListener('click', function() {
    if (burgerMenu.classList.contains('burger-menu--active')) {
        burgerMenu.classList.remove('burger-menu--active');
        burgerNav.classList.remove('burger-nav--active');
    } else {
        burgerMenu.classList.add('burger-menu--active');
        burgerNav.classList.add('burger-nav--active');
    }
});


// Add a click event listener to the burger icon
burgerIcon.addEventListener('click', function() {
    // Toggle the active class on the burger icon stripes
    document.querySelectorAll('.burger-icon-stripe').forEach((stripe, index) => {
        stripe.classList.toggle(`active-stripe-${index + 1}`);
    });
});

burgerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelectorAll('.burger-icon-stripe').forEach((stripe, index) => {
            stripe.classList.remove(`active-stripe-${index + 1}`);
        });
        burgerMenu.classList.remove('burger-menu--active');
        burgerNav.classList.remove('burger-nav--active');
        console.log('done');
    })
})

