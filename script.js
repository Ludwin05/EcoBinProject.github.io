document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoBin website loaded successfully!');

    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropdownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
        dropdownMenu.classList.toggle('open')
        const isOpen = dropdownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
    }

    // Create overlay element for enlarged images
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Function to enable image enlargement
    const enableImageEnlarge = (selector) => {
        const images = document.querySelectorAll(selector);

        images.forEach((image) => {
            image.addEventListener('click', () => {
                // Toggle the enlarged class for the image
                image.classList.toggle('enlarged');
                overlay.classList.toggle('active'); // Show/hide the overlay

                if (image.classList.contains('enlarged')) {
                    const enlargedImage = document.createElement('img');
                    enlargedImage.src = image.src; // Set the source to the clicked image
                    overlay.innerHTML = ''; // Clear previous content in overlay
                    overlay.appendChild(enlargedImage);
                }
            });
        });

        // Close enlarged image when overlay is clicked
        overlay.addEventListener('click', () => {
            images.forEach((img) => img.classList.remove('enlarged'));
            overlay.classList.remove('active');
        });
    };

    // Apply enlargement functionality to specific images
    enableImageEnlarge('.clickable-feature');  // Feature images
    enableImageEnlarge('.clickable-image');    // "How It Works" image
    enableImageEnlarge('.clickable-diagram');  // Circuit diagram

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Assuming you want to toggle the dropdown menu when the hamburger icon is clicked
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

