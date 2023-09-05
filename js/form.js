let input = document.querySelectorAll('.form-input');

input.forEach(function(item) {
    item.addEventListener('click', function() {
            console.log('good');
            console.log(item);
    })
})

