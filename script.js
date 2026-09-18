document.addEventListener('DOMContentLoaded', () => {
  const carrosseis = document.querySelectorAll('.carousel');

  carrosseis.forEach((carousel) => {
    const track = carousel.querySelector('.track');
    const slides = carousel.querySelectorAll('.slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const btnPrev = carousel.querySelector('.prev');
    const btnNext = carousel.querySelector('.next');
    let indiceAtual = 0;

    if (slides.length <= 1) {
      if (btnPrev) btnPrev.style.display = 'none';
      if (btnNext) btnNext.style.display = 'none';
      return;
    }

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => irPara(i));
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.dot');

    function atualizar() {
      track.style.transform = `translateX(-${indiceAtual * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === indiceAtual));
    }

    function mover(direcao) {
      indiceAtual = (indiceAtual + direcao + slides.length) % slides.length;
      atualizar();
    }

    function irPara(i) {
      indiceAtual = i;
      atualizar();
    }

    btnPrev.addEventListener('click', () => mover(-1));
    btnNext.addEventListener('click', () => mover(1));
  });
})