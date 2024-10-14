document.addEventListener('DOMContentLoaded', function() {
    const homepageSection = document.getElementById('homepageSection');

    // Check if URL contains #homepageSection
    if (window.location.hash === '#homepageSection') {
        showHomepage();
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // If login is successful, show homepage
            showHomepage();
        } else {
            errorMessage.textContent = "Invalid email or password.";
        }
    });

    function showHomepage() {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('homepageSection').style.display = 'block';
        startCarousel();
    }

    /* Carousel Functionality */
    let currentSlide = 0;
    function changeSlide(direction) {
        const images = document.getElementsByClassName('carousel-image');
        images[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + images.length) % images.length;
        images[currentSlide].classList.add('active');
    }
    function startCarousel() {
        const images = document.getElementsByClassName('carousel-image');
        setInterval(function() {
            images[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % images.length;
            images[currentSlide].classList.add('active');
        }, 3000); // Change image every 3 seconds
    }
});
