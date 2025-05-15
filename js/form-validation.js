/**
 * Patrick Shao Portfolio - Form Validation JavaScript
 */

// DOM Elements
const contactForm = document.getElementById("contactForm")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const emailFeedback = document.getElementById("emailFeedback")
const phoneFeedback = document.getElementById("phoneFeedback")
const submitBtn = document.querySelector(".submit-btn")

// Email validation using regex
function validateEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}

// Phone validation using regex
function validatePhone(phone) {
  // Allow for international formats, spaces, dashes, and parentheses
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  return phone === "" || phoneRegex.test(phone) // Phone is optional
}

// Real-time email validation
function initEmailValidation() {
  if (!emailInput || !emailFeedback) return

  emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim()

    if (email === "") {
      emailFeedback.textContent = ""
      emailFeedback.className = "validation-feedback"
      emailInput.style.borderColor = ""
    } else if (validateEmail(email)) {
      emailFeedback.textContent = "Valid email address"
      emailFeedback.className = "validation-feedback valid-feedback"
      emailInput.style.borderColor = "#2ecc71"
    } else {
      emailFeedback.textContent = "Please enter a valid email address"
      emailFeedback.className = "validation-feedback invalid-feedback"
      emailInput.style.borderColor = "#e74c3c"
    }
  })
}

// Real-time phone validation
function initPhoneValidation() {
  if (!phoneInput || !phoneFeedback) return

  phoneInput.addEventListener("input", () => {
    const phone = phoneInput.value.trim()

    if (phone === "") {
      phoneFeedback.textContent = ""
      phoneFeedback.className = "validation-feedback"
      phoneInput.style.borderColor = ""
    } else if (validatePhone(phone)) {
      phoneFeedback.textContent = "Valid phone number"
      phoneFeedback.className = "validation-feedback valid-feedback"
      phoneInput.style.borderColor = "#2ecc71"
    } else {
      phoneFeedback.textContent = "Please enter a valid phone number"
      phoneFeedback.className = "validation-feedback invalid-feedback"
      phoneInput.style.borderColor = "#e74c3c"
    }
  })
}

// Form submission
function initFormSubmission() {
  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate all fields
    const email = emailInput.value.trim()
    const phone = phoneInput ? phoneInput.value.trim() : ""

    let isValid = true

    if (email !== "" && !validateEmail(email)) {
      emailFeedback.textContent = "Please enter a valid email address"
      emailFeedback.className = "validation-feedback invalid-feedback"
      emailInput.style.borderColor = "#e74c3c"
      isValid = false
    }

    if (phone !== "" && !validatePhone(phone)) {
      phoneFeedback.textContent = "Please enter a valid phone number"
      phoneFeedback.className = "validation-feedback invalid-feedback"
      phoneInput.style.borderColor = "#e74c3c"
      isValid = false
    }

    if (isValid) {
      // Show loading state
      submitBtn.classList.add("loading")

      // Simulate form submission (would be replaced with actual AJAX in production)
      setTimeout(() => {
        // Reset form
        contactForm.reset()

        // Reset validation styles
        emailFeedback.textContent = ""
        emailFeedback.className = "validation-feedback"
        emailInput.style.borderColor = ""

        if (phoneInput && phoneFeedback) {
          phoneFeedback.textContent = ""
          phoneFeedback.className = "validation-feedback"
          phoneInput.style.borderColor = ""
        }

        // Hide loading state
        submitBtn.classList.remove("loading")

        // Show success message (in a real application, this would be more sophisticated)
        alert("Thank you for your message! I will get back to you soon.")
      }, 1500)
    }
  })
}

// Initialize all form validation
document.addEventListener("DOMContentLoaded", () => {
  initEmailValidation()
  initPhoneValidation()
  initFormSubmission()
})
