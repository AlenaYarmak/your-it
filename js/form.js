let inputs = document.querySelectorAll('.form-input');

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

