let form = document.querySelector('.myForm'),
    btn = document.querySelector('.btn'),
    inputs = document.querySelectorAll('.i-1');


btn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(serialize(form));
    for(let item of inputs) {
        item.value = '';
    }
})
