// Scroll to element smoothly
let btnScroll = document.querySelector('.scroll');
let sexSelector = document.querySelector('.sex-selector');

btnScroll.addEventListener('click', function() {
    scrollTo(sexSelector);
})

function scrollTo(elem) {
    window.scroll({
        left : 0,
        top : elem.offsetTop,
        behavior : "smooth"
    })
}