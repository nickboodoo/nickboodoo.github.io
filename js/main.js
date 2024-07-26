// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle active class on nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Example function to show an alert
    const showAlertButton = document.getElementById('showAlertButton');
    if (showAlertButton) {
        showAlertButton.addEventListener('click', function() {
            alert('Hello, this is an alert!');
        });
    }
});
