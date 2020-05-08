window.addEventListener('DOMContentLoaded', function() {

    //Tabs
    let tabs = document.querySelectorAll('.tab');
    let body = document.querySelectorAll('.tab-body');

    // Изначально мы видим первый таб-бади
    function init() {
        for (let i = 1; i < body.length; i++) {
            body[i].classList.add('hide');
        }
    }
    init();

    // Удаляем у всех табов active и присваиваем тому, на который нажали, также получаем аттрибут
    tabs.forEach((elem) => {
        elem.addEventListener('click', function() {
            for(let item of tabs) {
                item.classList.remove('active');
            }
            this.classList.add('active');
            let att = this.getAttribute('data');
            showTab(att);
    });
    });
    
    // Принимаем аттрибут и сверяем с аттрибутом таб-бади, а перед этим скрываем все таб-бади
    function showTab(att) {
        for(let item of body) {
            item.classList.add('hide')
        }
        document.querySelector(`.tab-body[data="${att}"]`).classList.remove('hide');
    }
 
    // Табы с делигированием событий 
    // let tabsBlock = document.querySelector('.tab-wrap');
    // let body = document.querySelectorAll('.tab-body');
    // let tabs = document.querySelectorAll('.tab');

    // function showFirst(a) {
    //     for(let i = a; i < body.length; i++) {
    //         body[i].classList.add('hide');
    //     }
    // }
    // showFirst(1);
    // tabsBlock.addEventListener('click', function(event) {
    //     for (let item of tabs) {
    //         item.classList.remove('active');
    //     }
    //     event.target.classList.add('active');
    //     if (event.target && event.target.classList.contains('tab')) {
    //         for(let i = 0; i < tabs.length; i++) {
    //             if (event.target == tabs[i]) {
    //                 showTab(i);
    //             }
    //         }
    //     }
    // })

    // function showTab(i) {
    //     for(let item of body) {
    //         item.classList.add('hide');
    //     }
    //     body[i].classList.remove('hide');
    // }
})