/**
 * Patrikc Shao Portfolio - Survey Page JavaScript
 */

// DOM Elements
const surveyForm = document.getElementById("surveyForm")
const surveySubmitBtn = document.getElementById("surveySubmit")

// Form validation
function validateSurveyForm() {
  // Check if all required radio buttons are selected
  const designRating = document.querySelector('input[name="designRating"]:checked')
  const techRating = document.querySelector('input[name="techRating"]:checked')
  const commRating = document.querySelector('input[name="commRating"]:checked')

  if (!designRating || !techRating || !commRating) {
    return false
  }

  return true
}

// Form submission
function initSurveySubmission() {
  if (!surveyForm) return

  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateSurveyForm()) {
      // Show loading state (if we had a spinner)
      surveySubmitBtn.disabled = true
      surveySubmitBtn.textContent = "Submitting..."

      // Simulate form submission (would be replaced with actual AJAX in production)
      setTimeout(() => {
        // Reset form
        surveyForm.reset()

        // Reset button state
        surveySubmitBtn.disabled = false
        surveySubmitBtn.textContent = "Submit Survey"

        // Show confirmation
        showConfirmation()
      }, 1500)
    } else {
      // Show validation message
      alert("Please complete all required fields in the survey.")
    }
  })
}

// Show confirmation message
function showConfirmation() {
  // Create confirmation message
  const confirmationMessage = document.createElement("div")
  confirmationMessage.className = "survey-confirmation"
  confirmationMessage.innerHTML = `
        <div class="confirmation-content">
            <h3>Thank You for Your Feedback!</h3>
            <p>Your responses have been submitted successfully. I appreciate your time and input.</p>
            <button id="closeConfirmation" class="cta-button">Close</button>
        </div>
    `

  // Style the confirmation
  confirmationMessage.style.position = "fixed"
  confirmationMessage.style.top = "0"
  confirmationMessage.style.left = "0"
  confirmationMessage.style.width = "100%"
  confirmationMessage.style.height = "100%"
  confirmationMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
  confirmationMessage.style.display = "flex"
  confirmationMessage.style.alignItems = "center"
  confirmationMessage.style.justifyContent = "center"
  confirmationMessage.style.zIndex = "1000"

  // Style the content
  const content = confirmationMessage.querySelector(".confirmation-content")
  content.style.backgroundColor = "var(--bg-color)"
  content.style.padding = "2rem"
  content.style.borderRadius = "var(--border-radius-lg)"
  content.style.maxWidth = "500px"
  content.style.textAlign = "center"

  // Add to the body
  document.body.appendChild(confirmationMessage)

  // Add close functionality
  const closeButton = document.getElementById("closeConfirmation")
  closeButton.addEventListener("click", () => {
    document.body.removeChild(confirmationMessage)
  })
}

// Initialize all survey functionality
document.addEventListener("DOMContentLoaded", () => {
  initSurveySubmission()
})
