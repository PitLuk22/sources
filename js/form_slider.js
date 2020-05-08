document.querySelector('.left-50').addEventListener('click', () => {
    document.querySelector('.form-slider').style.marginLeft ='-250px';
})
document.querySelectorAll('.back').forEach((elem) => {
    elem.addEventListener('click', function() {
        document.querySelector('.form-slider').style.marginLeft = '0';
    });
})
