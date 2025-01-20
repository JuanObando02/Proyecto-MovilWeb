let currentSlide = 0; // Índice de la imagen actual
const slides = document.querySelectorAll('.carrusel-img img');
const indicators = document.querySelectorAll('.indicator');

// Muestra la imagen según el índice
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
    currentSlide = index;
}

// Navegar a la imagen anterior
function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
}

// Navegar a la siguiente imagen
function nextSlide() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

// Ir a una imagen específica (al hacer clic en un indicador)
function goToSlide(index) {
    showSlide(index);
}