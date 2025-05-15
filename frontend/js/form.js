//form and wrapper variables
const form = document.querySelector('.form');
const wrapper = document.querySelector('.wrapper');

const inputs = document.querySelectorAll('.form-input');
const submit = document.querySelector('.form-submit');
//user data variables
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const userMessage = document.getElementById('message');

const wrapperBlur = document.querySelector('.wrapper--blur');
const sectionOpacity = document.querySelector('.section--decrease-opacity');
const mapSection = document.querySelector('.map-content');
const formSection = document.querySelector('.form-container');
//buttons variables
const popupButton = document.querySelector('.popup-button');
const closeButton = document.querySelector('.close-button');
//anchor top
const headerTop = document.getElementById('main');

const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-title');
const popupText = document.querySelector('.popup-text');

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

//show popup
function showPopup(imageSrc, title, text) {
    popup.style.display = 'flex';
    wrapperBlur.classList.add('blur-background');
    mapSection.classList.add('section--decrease-opacity');
    formSection.classList.add('section--decrease-opacity');

    popupImg.src = imageSrc;
    popupTitle.textContent = title;
    popupText.textContent = text;
}

//hide popup
function hidePopup() {
    popup.style.display = 'none';
    wrapperBlur.classList.remove('blur-background');
    mapSection.classList.remove('section--decrease-opacity');
    formSection.classList.remove('section--decrease-opacity');
}

//hide popup when user click outside
document.addEventListener('click', (event) => {
    if (popup.style.display === 'flex' && event.target !== popup && !popup.contains(event.target) && event.target !== testBtn) {
        hidePopup();
    }
});

popupButton.addEventListener('click', () => {
    hidePopup();
    scrollToHeader();
})

//add addEventListener for closeButton
closeButton.addEventListener('click', () => {
    hidePopup();
})

/* clear inputs */
function emptyForm() {
    userName.value = '';
    userEmail.value = '';
    userPhone.value = '';
    userMessage.value = '';

    submit.disabled = false;
}

/* show labels */
function showAllLabels() {
    const labels = document.querySelectorAll('.form-placeholder');
    labels.forEach((label) => {
        label.style.display = 'block';
    });
}

//form submit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    submit.disabled = true;
    const userData = {
        name: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        message: userMessage.value
    }

    const json = JSON.stringify(userData);

    fetch('/api/send', {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showPopup('./img/popup/success.webp', 'Ваші дані прийнято!', "Ми зв'яжемося з вами найближчим часом!");
            emptyForm();
            showAllLabels();
        } else {
            handleErrorResponse(response);
            emptyForm();
            showAllLabels();
        }
    })
    .catch(error => {
        /* window.location.href = '/error';
        emptyForm(); */
    })

})

function handleErrorResponse(response) {
    switch (response.status) {
        case 400:
            showPopup('./img/popup/limit.webp', 'Упс!', 'Сервер не може обробити запит! Спробуйте пізніше!');
            break;
        case 404:
            showPopup('./img/popup/error.webp', 'Упс!', 'Щось пішло не так із нашого боку. Повторіть спробу пізніше.');
            break;
        case 429:
            showPopup('./img/popup/limit.webp', 'Упс!', 'Забагато запитів! Спробуйте пізніше!');
            break;
        case 500:
            showPopup('./img/popup/error.webp', 'Упс!', 'Помилка серверу! Повторіть спробу пізніше.');
            break;
        case 503:
            showPopup('./img/popup/error.webp', 'Вибачте!', 'Відправка форми в даний час недоступна. Спробуйте пізніше!');
            break;
        case 504:
            showPopup('./img/popup/error.webp', 'Вибачте!', 'Не вдалося виконати відправку! Оновіть сторінку або спробуйте ще раз.');
            break;
        default:
            showPopup('./img/popup/error.webp', 'Вибачте!', 'Відправка форми в даний час недоступна. Спробуйте пізніше!');
            break;
    }
}
