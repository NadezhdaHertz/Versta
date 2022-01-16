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


    var i = 1;

    /*  function change_photo() {
          if (i == 3) { i = 1 }
  
          if (i == 1) {
              first_photo.classList.add('act');
              second_photo.classList.remove('act');
              console.log(1);
          }
  
          if (i == 2) {
              first_photo.classList.remove('act');
              second_photo.classList.add('act');
              console.log(2);
          }
      } */
    /* setInterval(() => {
        i = i + 1;
        change_photo()
    }, 4000) */

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
        /*change_photo(); */
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
        /* change_photo(); */
    })


}

window.onload = run;