function run() {
    /* Config */

    const width = 130;
    const count = 1;

    const carusel = document.getElementById('carusel');
    const first_slide = document.getElementById('first_slide');
    const second_slide = document.getElementById('second_slide');

    const listItemsCount = carusel.querySelector('.slide').length;

    let position = 0;

    const prev = carusel.querySelector('.prev');
    const next = carusel.querySelector('.next');

    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');

                } else {
                    animItem.classList.remove('_active');
                }
            }

        }
        function offset(el) {
            const rect = el.getBoundingClientRect();
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }
    var i = 1;

    prev.addEventListener('click', () => {
        if (first_slide.classList.value == 'first_slide slide act') {
            first_slide.classList.remove('act');
            second_slide.classList.add('act');
            console.log(1)
        }
        else {
            first_slide.classList.add('act');
            second_slide.classList.remove('act');
            console.log(2)
        }
    })

    next.addEventListener('click', () => {
        if (first_slide.classList.value == 'first_slide slide act') {
            first_slide.classList.remove('act');
            second_slide.classList.add('act');
            console.log(3)
        }
        else {
            first_slide.classList.add('act');
            second_slide.classList.remove('act');
            console.log(4)
        }
    })
    animOnScroll();

jQuery(document).ready(function ($) {
    $('<style>' +
        '.scrollTop{ display:none; z-index:9999; position:fixed;' +
        'bottom:20px; width:88px; height:125px;' +
        'background:url(../img/up.png) 0 0 no-repeat; }' +
        '.scrollTop:hover{ }' +
        '</style>').appendTo('body');
    var
        speed = 550,
        $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');
    $scrollTop.click(function (e) {
        e.preventDefault();
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: 0
        }, speed);
    });

    //появление
    function show_scrollTop() {
        console.log('test');
        ($(window).scrollTop() > 330) ? $scrollTop.fadeIn(700): $scrollTop.fadeOut(700);
    }
    $(window).scroll(function () {
        show_scrollTop();
    });
    show_scrollTop();
});
}


window.onload = run;