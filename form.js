const form = document.querySelector('.form');

const inputs = document.querySelectorAll('.form-input');

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const userMessage = document.getElementById('message');

const wrapperBlur = document.querySelector('.wrapper--blur');
const popupButtons = document.querySelectorAll('.popup-button');
const closeButtons = document.querySelectorAll('.close-button');
const popups = document.querySelectorAll('.popup');

const headerTop = document.getElementById('main');

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

function scrollToHeader() {
    headerTop.scrollIntoView({ behavior: 'smooth' });
}

function showPopup(className) {
    const popup = document.querySelector(`.${className}`);
    if (popup) {
        popup.style.display = 'block';
        wrapperBlur.classList.add('blur-background');
    }
}

function hidePopup(popup) {
    popup.style.display = 'none';
    wrapperBlur.classList.remove('blur-background');
}

closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        hidePopup(popups[index]);
    })
})

document.addEventListener('click', (event) => {
    popups.forEach((popup) => {
        if (!popup.contains(event.target)) {
            hidePopup(popup);
        }
    })
})

popupButtons.forEach((popupButton, index) => {
    popupButton.addEventListener('click', () => {
        hidePopup(popups[index]);
        scrollToHeader();
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

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
<<<<<<< HEAD

    .then(response => {
        if (response.status === 429) {
            showPopup(popupError);

            emptyForm();
        } else {
            return response.json().then(data => {
                showPopup(popupSuccess);
                
                emptyForm();
            })}
=======
    .then(response => response.json())
    .then(data => {
        showPopup(popup_success)
>>>>>>> parent of 5b0eb5a (add emptyForm function / add blur and opacity classes)
    })
    .catch(error => {
        showPopup(popup_error)
    });

})

