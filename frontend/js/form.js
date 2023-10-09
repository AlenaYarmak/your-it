let form = document.querySelector('.form');

let inputs = document.querySelectorAll('.form-input');

let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPhone = document.getElementById('phone');
let userMessage = document.getElementById('message');

let wrapperBlur = document.querySelector('.wrapper--blur');
let popupError = document.querySelector('.popup_error');
let popupSuccess = document.querySelector('.popup_success');

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

function submitSuccess() {
    popupSuccess.style.display = 'block';
    wrapperBlur.style.display = 'block';
}

function submitError() {
    popupError.style.display = 'block';
    wrapperBlur.style.display = 'block';
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
        submitSuccess();
        console.log(response.json);
    })
    .catch(error => {
        // Handle errors (e.g., show an error message)
    });

})

