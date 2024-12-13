
// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('open');  // Toggle the 'open' class to show/hide the menu
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "↑ Scroll to Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px 20px";
scrollToTopButton.style.backgroundColor = "#f76c6c"; // Red button
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none"; // Hidden by default

document.body.appendChild(scrollToTopButton);

// Show the button when scrolled down 100px
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top when clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation (for Contact form)
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (event) => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    let valid = true;

    // Reset previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    // Name validation
    if (name.value.trim() === "") {
        valid = false;
        const error = document.createElement('p');
        error.classList.add('error-message');
        error.textContent = "Name is required.";
        name.insertAdjacentElement('afterend', error);
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        const error = document.createElement('p');
        error.classList.add('error-message');
        error.textContent = "Please enter a valid email address.";
        email.insertAdjacentElement('afterend', error);
    }

    // Message validation
    if (message.value.trim() === "") {
        valid = false;
        const error = document.createElement('p');
        error.classList.add('error-message');
        error.textContent = "Message cannot be empty.";
        message.insertAdjacentElement('afterend', error);
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});

