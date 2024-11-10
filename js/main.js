document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const contactForm = document.getElementById('contactForm');
    const contactFeedback = document.getElementById('contactFeedback');

    // Change Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Contact Form Validation and Feedback
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            contactFeedback.textContent = "Thank you for your message! I will get back to you soon.";
            contactForm.reset();
        } else {
            contactFeedback.textContent = "Please fill out all fields.";
            contactFeedback.style.color = "red";
        }
    });
});

window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');
    if (window.scrollY > 100) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});
