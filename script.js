// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const ctaButtons = document.querySelectorAll('.btn-primary');
const currentYearSpan = document.getElementById('current-year');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button click effects
ctaButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Set current year in footer (if element exists)
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Form validation simulation (for any future forms)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        // Simulate API call
        setTimeout(() => {
            alert('Thank you! Your message has been sent successfully.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.reset();
        }, 1500);
    });
}

// Initialize features counter animation on scroll
const stats = document.querySelectorAll('.stat h3');
const observerOptions = {
    threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const target = parseInt(stat.textContent);
            let count = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(count) + (stat.textContent.includes('%') ? '%' : '+');
            }, 30);
            observer.unobserve(stat);
        }
    });
}, observerOptions);
stats.forEach(stat => observer.observe(stat));

// Console welcome message
console.log('%c🚀 Welcome to Nexus Landing Page!', 'color: #6a11cb; font-size: 16px; font-weight: bold;');
console.log('%cDesigned with passion for the digital world.', 'color: #2575fc;');