// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const ctaButtons = document.querySelectorAll('.btn-primary');
const currentYear = document.querySelector('#current-year');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing Page loaded successfully!');
    
    // Set current year in footer if element exists
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Add click event to all CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // If it's a 