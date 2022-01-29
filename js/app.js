function run() {
    /* Config */

    const width = 130;
    const count = 1;

    /*   const carusel = document.getElementById('carusel');
   const first_slide = document.getElementById('first_slide');
     const second_slide = document.getElementById('second_slide');
 
     const listItemsCount = carusel.querySelector('.slide').length; */

    let position = 0;

    /*   const prev = carusel.querySelector('.prev');
     const next = carusel.querySelector('.next'); */

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
            ($(window).scrollTop() > 330) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
        }
        $(window).scroll(function () {
            show_scrollTop();
        });
        show_scrollTop();
    });

    /* Slider */

    let item = document.querySelectorAll('.item');
    const itemLength = item.length;
    // console.log(itemLength);

    const rightArrow = document.querySelector("#rightArrow");
    const leftArrow = document.querySelector("#leftArrow");
    const galleryWidth = window.screen.width;

    let slider = [];
    for (let i = 0; i < itemLength; i++) {
        slider[i] = item[i];
        // console.log(slider[i]);
        item[i].remove();
    }
    let step = 0;
    let offset = 0;

    function burgerSlider() {
        let div = document.createElement('div');
        div = slider[slider.length - 1];
        div.classList.add('item');
        div.style.left = -galleryWidth + 'px';
        // console.log(div);
        document.querySelector('.items').appendChild(div);


        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * galleryWidth + 'px';
        // console.log(div);
        document.querySelector('.items').appendChild(div);
        div = slider[step + 1];
        div.classList.add('item');
        div.style.left = offset * galleryWidth + galleryWidth + 'px';
        // console.log(div);
        document.querySelector('.items').appendChild(div);
        offset = 1;

    }
    function burgerSliderL() {
        if (step == (slider.length - 1)) {
            step = 1;
        } else {
            if (step == (slider.length - 2)) {
                step = 0;
            } else {
                step = (step + 2);
            }
        }
        let div = document.createElement('div');
        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * galleryWidth + 'px';
        // console.log(div);
        document.querySelector('.items').appendChild(div);

        if (step == 0) {
            step = (slider.length - 1);
        } else {
            step = (step - 1);
        }
        offset = 1;
    }

    function left() {
        leftArrow.onclick = null;
        // 
        let slider2 = document.querySelectorAll('.item');
        let offset2 = -1;
        // console.log(slider2.length);
        for (let i = 0; i < slider2.length; i++) {
            slider2[i].style.left = offset2 * galleryWidth - galleryWidth + 'px';
            offset2++;
        }
        setTimeout(function () {
            slider2[0].remove();
            burgerSliderL();
            leftArrow.onclick = left;
        }, 600);

    }

    function burgerSliderR() {
        if (step == 0) {
            step = (slider.length - 2);
        } else {
            if (step == 1) {
                step = (slider.length - 1);
            } else {
                step = (step - 2);
            }
        }
        let offset = -1;
        let div = document.createElement('div');
        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * galleryWidth + 'px';
        // console.log(div);
        document.querySelector('.items').insertBefore(div, items.firstElementChild);
        if (step == (slider.length - 1)) {
            step = 0;
        } else {
            step = (step + 1);
        }
        offset = 1;
    }

    function right() {
        rightArrow.onclick = null;

        let slider2 = document.querySelectorAll('.item');
        let offset2 = (slider2.length - 1);

        for (let i = (slider2.length - 1); i >= 0; i--) {
            slider2[i].style.left = offset2 * galleryWidth + 'px';
            offset2--;
        }
        setTimeout(function () {
            slider2[(slider2.length - 1)].remove();
            burgerSliderR();
            rightArrow.onclick = right;
        }, 600);
    }


    burgerSlider();
    step = 0;

    leftArrow.onclick = left;
    rightArrow.onclick = right;

    /* comment */

    /*   $("#get_button").on("click", "a", function (event) {
           event.preventDefault();
           var id = $(this).attr("href"),
               top = $(id).offset().top;
           $("body,html").animate({ scrollTop: top }, 1500);
       }); */

    jQuery('#get_button').click(function () {
        jQuery.scrollTo('#contact_form', 1500);
    });

    jQuery('#know_button').click(function () {
        jQuery.scrollTo('#second_block', 1000);
    });

}


window.onload = run;