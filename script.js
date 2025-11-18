// ========================================
// Mobile Navigation Toggle
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ========================================
// Newsletter Form Submission
// ========================================

const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Simple email validation
        if (email && isValidEmail(email)) {
            // Simulate form submission
            newsletterMessage.textContent = 'Thank you for subscribing! Check your email for confirmation.';
            newsletterMessage.style.color = '#FFFFFF';
            emailInput.value = '';

            // Reset message after 5 seconds
            setTimeout(() => {
                newsletterMessage.textContent = '';
            }, 5000);
        } else {
            newsletterMessage.textContent = 'Please enter a valid email address.';
            newsletterMessage.style.color = '#FFB6C1';

            setTimeout(() => {
                newsletterMessage.textContent = '';
            }, 3000);
        }
    });
}

// ========================================
// Contact Form Submission
// ========================================

const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const subject = this.querySelector('#subject').value;
        const message = this.querySelector('#message').value;

        // Validation
        if (name && email && subject && message && isValidEmail(email)) {
            // Simulate form submission
            contactMessage.textContent = 'Thank you for your message! We will get back to you within 24-48 hours.';
            contactMessage.style.color = '#28a745';

            // Reset form
            this.reset();

            // Reset message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 6000);
        } else {
            contactMessage.textContent = 'Please fill in all fields with valid information.';
            contactMessage.style.color = '#dc3545';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 3000);
        }
    });
}

// ========================================
// Email Validation Helper Function
// ========================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========================================
// Scroll Animation Observer
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all slide-up elements
document.addEventListener('DOMContentLoaded', function() {
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(element => {
        observer.observe(element);
    });
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip empty anchors or just "#"
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }

        const targetElement = document.querySelector(href);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Add active state on scroll for navbar
// ========================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    }
});

// ========================================
// Card Hover Effect Enhancement
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .technique-card, .skill-card, .approach-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ========================================
// Lazy Loading Images (Performance)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// ========================================
// Form Input Animation
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%c Welcome to Skill Sac! ', 'background: #4A90E2; color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: bold;');
console.log('%c Empowering students through effective learning techniques and self-management skills ', 'color: #2C3E50; font-size: 12px; margin-top: 5px;');