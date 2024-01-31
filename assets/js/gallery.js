
document.addEventListener('DOMContentLoaded', (event) => {
    const images = ['Backyard with barn and red tree.webp', 'lawn mower and sky.webp', 'Stone path with shrubs.webp', 'brick and dirt path with shrubs.webp', 'front of large home with red plants.webp', 'vast landscape with many trees.webp', 'multiple homes sharing a large backyard.webp', 'grey walkway with large landscaped walls.webp', 'large white home with large maroon tree.webp', 'tall home with small bed of shrubs.webp', 'modern back yard with staircase.webp', 'large yard with many trees.webp','large backyard with a pool.webp', 'beautiful landscape with many trees and shrubs.webp', 'large home with large porch.webp', 'small red home.webp'];
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxClose = document.querySelector('.lightbox-close');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `assets/images/gallery/${image}`;
        imgElement.alt = image.split('.')[0];
        imgElement.loading = 'lazy'
        imgElement.classList.add('gallery-image');

        const linkElement = document.createElement('a');
        linkElement.href = `assets/images/gallery/${image}`;
        linkElement.classList.add('gallery-item');
        linkElement.appendChild(imgElement);
        gallery.appendChild(linkElement);

        linkElement.addEventListener('click', function(event) {
            event.preventDefault(); 
            lightbox.style.display = 'block';
            lightboxContent.src = imgElement.src;
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});

