let imgToLoad = [
    'img/socials/hover-email.png',
    'img/socials/hover-phone.png',
    'img/socials/hover-telegram.png',
    'img/socials/hover-viber.png',
    'img/socials/hover-whatsapp.png'
];

imgToLoad.forEach(function(src) {
    let img = new Image();
    img.src = src;
});
