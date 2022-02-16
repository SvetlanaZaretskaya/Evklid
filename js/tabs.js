
document.querySelectorAll('.tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tabs-btn').forEach(function (btn) {
            btn.classList.remove('steps__button-active')
        });
        event.currentTarget.classList.add('steps__button-active');

        document.querySelectorAll('.tab-content').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tab-content-active')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
});




const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        loop: true,
        clickable: true
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('#drop-down-menu').classList.toggle('is-active')
    })
});

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('#header__burger').classList.toggle('header__burger-x')
    })
});





window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#header__link-search').addEventListener('click', function() {
        document.querySelector('#searchbar').classList.toggle('display')
    })
});

