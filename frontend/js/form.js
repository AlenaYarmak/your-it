const form = document.querySelector('.form');

const inputs = document.querySelectorAll('.form-input');

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const userMessage = document.getElementById('message');

const wrapperBlur = document.querySelector('.wrapper--blur');
const popupError = document.querySelector('.popup_error');
const popupSuccess = document.querySelector('.popup_success');

inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        let label = this.nextElementSibling;
        if (label && label.classList.contains('form-placeholder')) {
            label.style.display = 'none';
        }
    })

    input.addEventListener('focusout', function() {
        let label = this.nextElementSibling;
        if (label && label.classList.contains('form-placeholder') && this.value === '') {
            label.style.display = 'block';
        }
    })
})

function showPopup(className) {
    const popup = document.querySelector(`.${className}`);
    if (popup) {
        popup.style.display = 'block';
        wrapperBlur.style.display = 'block';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
        name: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        message: userMessage.value
    }

    const json = JSON.stringify(userData);

    console.log(json);
    /* console.log(headers); */

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        showPopup(popupSuccess)
    })
    .catch(error => {
        showPopup(popupError)
    });

})

