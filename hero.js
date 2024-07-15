document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'hero1.jpg', 
        'hero2.jpg',
        'hero3.jpg'
    ];
    const hero = document.querySelector('.hero');
    let currentIndex = 0;

    function changeImage() {
        hero.classList.add('fade-out');
        setTimeout(() => {
            hero.style.backgroundImage = `url('${images[currentIndex]}')`;
            hero.style.backgroundSize = 'cover';
            hero.style.backgroundPosition = 'center';
            hero.style.backgroundRepeat = 'no-repeat';
            hero.classList.remove('fade-out');
            hero.classList.add('fade-in');
            currentIndex = (currentIndex + 1) % images.length;
        }, 500); // La duración de la animación de salida (en milisegundos)
    }

    changeImage();
    setInterval(changeImage, 8000); // Cambia la imagen cada 5 segundos
});
