const form = document.querySelector('.form');

const inputs = document.querySelectorAll('.form-input');

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const userMessage = document.getElementById('message');

const wrapperBlur = document.querySelector('.wrapper--blur');
const sectionOpacity = document.querySelector('.section--decrease-opacity');
const mapSection = document.querySelector('.map-content');
const formSection = document.querySelector('.form-container');

const popupButtons = document.querySelectorAll('.popup-button');
const closeButtons = document.querySelectorAll('.close-button');

const popups = document.querySelectorAll('.popup');
const popupSuccess = document.querySelector('.popup_success');
const popupError = document.querySelector('.popup_error');
const popupLimit = document.querySelector('.popup_limit');

const headerTop = document.getElementById('main');

//show and hide labels within their inputs
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

//smooth scroll to top page
function scrollToHeader() {
    headerTop.scrollIntoView({ behavior: 'smooth' });
}

//show and hide popup block
function showPopup(className) {
    const popup = document.querySelector(`.${className}`);
    if (popup) {
        popup.style.display = 'flex';
        wrapperBlur.classList.add('blur-background');
        mapSection.classList.add('section--decrease-opacity');
        formSection.classList.add('section--decrease-opacity');
    }
}

function hidePopup(popup) {
    popup.style.display = 'none';
    wrapperBlur.classList.remove('blur-background');
    mapSection.classList.remove('section--decrease-opacity');
    formSection.classList.remove('section--decrease-opacity');
}

//add addEventListener for closeButton
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        hidePopup(popups[index]);
    })
})

//hide popup when user click outside
document.addEventListener('click', (event) => {
    popups.forEach((popup) => {
        if (!popup.contains(event.target)) {
            hidePopup(popup);
        }
    })
})

//hide popup and scroll to top
popupButtons.forEach((popupButton, index) => {
    popupButton.addEventListener('click', () => {
        hidePopup(popups[index]);
        scrollToHeader();
    })
})

//form submit
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
    .then(response => {
        if (response.status === 429) {
            showPopup('popup_limit');

            emptyForm();
        } else {
            return response.json().then(data => {
                showPopup('popup_success');

                emptyForm();
            })
        }
    })
    .catch(error => {
        showPopup('popup_error');

        emptyForm();
    })

})

