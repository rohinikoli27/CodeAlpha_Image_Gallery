let currentIndex = 0;
let images = [];

function filterImages(category) {
    const allImages = document.querySelectorAll('.image');

    allImages.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function openLightbox(img) {
    images = Array.from(document.querySelectorAll('.image'))
        .filter(image => image.style.display !== 'none');

    currentIndex = images.indexOf(img);

    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.getElementById('lightbox-img').src = images[currentIndex].src;
  }
