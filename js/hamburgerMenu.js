const hamburgerCheckbox = document.getElementById('check');
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');

hamburgerCheckbox.addEventListener('change', function() {
    if (burgerMenu.classList.contains('burger-menu--active')) {
        burgerMenu.classList.remove('burger-menu--active');
        burgerNav.classList.remove('burger-nav--active');
        console.log('add green');
    } else {
        burgerMenu.classList.add('burger-menu--active');
        burgerNav.classList.add('burger-nav--active');
        console.log('add red');
    }
});