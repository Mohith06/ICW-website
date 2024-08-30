// Manages carousel functionality.
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap Carousel
    var myCarousel = document.querySelector('#newsCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Time interval for sliding (in milliseconds)
        wrap: true
    });
});