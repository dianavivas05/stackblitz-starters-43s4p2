document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; // Índice actual del slide
    const slides = document.querySelectorAll('.slide'); // Obtener todas las slides
    const totalSlides = slides.length; // Obtener el número total de slides
    
    // Función para cambiar de slide
    function showSlide(index) {
        // Ocultar todas las slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Mostrar la slide correspondiente al índice
        slides[index].classList.add('active');
    }
    
    // Función para mover al slide anterior
    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }
    
    // Función para mover al siguiente slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
    
    // Asocia las funciones a los botones
    document.querySelector('.prev-button').addEventListener('click', showPreviousSlide);
    document.querySelector('.next-button').addEventListener('click', showNextSlide);
    
    // Inicializa el carrusel mostrando la primera slide
    showSlide(currentIndex);
});
