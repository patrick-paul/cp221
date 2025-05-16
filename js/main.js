/**
 * Patrick Shao Portfolio - Main JavaScript
 */

// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const greetingElement = document.getElementById("greeting");
const typewriterElement = document.getElementById("typewriter");
const revealElements = document.querySelectorAll(".reveal");
const slideLeftElements = document.querySelectorAll(".slide-in-left");
const slideRightElements = document.querySelectorAll(".slide-in-right");
const rippleButtons = document.querySelectorAll(".ripple");

// Theme Toggle Functionality
function initThemeToggle() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Theme toggle click handler
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference to localStorage
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile nav when clicking a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Time-based Greeting
function setGreeting() {
  if (!greetingElement) return;

  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  greetingElement.textContent = greeting;
}

// Typewriter Effect
function initTypewriter() {
  if (!typewriterElement) return;

  const phrases = [
    "Freelance Web Developer",
    "UI/UX Designer",
    "Computer Science Student",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Deleting text
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Typing text
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal speed when typing
    }

    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at the end
      isDeleting = true;
      typingSpeed = 1500; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing new phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typewriter effect
  setTimeout(type, 1000);
}

// Scroll Reveal Animation
function initScrollReveal() {
  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });

    slideLeftElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });

    slideRightElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });
  }

  // Check on initial load
  checkReveal();

  // Check on scroll
  window.addEventListener("scroll", checkReveal);
}

// Ripple Effect for Buttons
function initRippleEffect() {
  rippleButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;

      const ripple = document.createElement("span");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  setGreeting();
  initTypewriter();
  initScrollReveal();
  initRippleEffect();
});
