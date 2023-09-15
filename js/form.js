/* const { response } = require("express"); */

let form = document.querySelector('.form');

let inputs = document.querySelectorAll('.form-input');

let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPhone = document.getElementById('phone');
let userMessage = document.getElementById('message');

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

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server's response (e.g., show a confirmation message)
        console.log(response.json);
    })
    .catch(error => {
        // Handle errors (e.g., show an error message)
    });

})

