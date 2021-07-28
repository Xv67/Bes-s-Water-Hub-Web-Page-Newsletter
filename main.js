

/*var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 10) {
    counter = 1;
  }
}, 3000);*/


addEventListener('DOMContentLoaded', () => {

    const images = ['styles/images/slides/slide-1.jpg',
    'styles/images/slides/slide-2.jpg',
    'styles/images/slides/slide-3.jpg',
    'styles/images/slides/slide-4.jpg',
    'styles/images/slides/slide-5.jpg',
    'styles/images/slides/slide-6.jpg',
    'styles/images/slides/slide-7.jpg',
    'styles/images/slides/slide-8.jpg',
    'styles/images/slides/slide-9.jpg',
    'styles/images/slides/slide-10.jpg',
    'styles/images/slides/slide-12.jpg',
    'styles/images/slides/slide-13.jpg',
    'styles/images/slides/slide-14.jpg',
    'styles/images/slides/slide-15.jpg',
    'styles/images/slides/slide-16.jpg',
    'styles/images/slides/slide-17.jpg'];

    let i = 1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const progressBar = document.querySelector("#progress-bar");
    const divIndicadores = document.querySelector("#indicadores");
    let porcentaje_base = 100/images.length;
    let porcentaje_actual = porcentaje_base;

    for (let index = 0; index < images.length; index++) {
      const div = document.createElement('div');
      div.classList.add("circles");
      div.id = index;
      divIndicadores.appendChild(div);
    }

    progressBar.style.width = `{porcentaje_base}%`;
    img1.src = images[0];
    const circulos = document.querySelectorAll('.circles');
    circulos[0].classList.add("resaltado");

    const slideshow = () => {
      img2.src = images[i];
      const circulo_actual = Array.from(circulos).find(el => el.id == i);
      Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));
      circulo_actual.classList.add('resaltado');
      img2.classList.add('active');
      i++;
      porcentaje_actual += porcentaje_base;
      progressBar.style.width = `${porcentaje_actual}%`;
      if (i == images.length) {
        i = 1;
        porcentaje_actual = porcentaje_base - porcentaje_base;
      }

      setTimeout (() => {
        img1.src = img2.src;
        img2.classList.remove("active");
      }, 2000)
    }

    setInterval(slideshow, 4000);
});
