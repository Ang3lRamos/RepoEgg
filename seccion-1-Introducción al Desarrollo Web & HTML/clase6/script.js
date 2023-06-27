// Variables globales
var currentImage = 0;
var images = document.querySelectorAll('.image-slider img');

// Función para mostrar la imagen siguiente
function nextImage() {
  images[currentImage].style.display = 'none';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = 'block';
}

// Función para mostrar la imagen anterior
function prevImage() {
  images[currentImage].style.display = 'none';
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].style.display = 'block';
}
