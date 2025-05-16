/**
 * Patrick Shao Portfolio - Portfolio Page JavaScript
 */

// DOM Elements
const detailButtons = document.querySelectorAll(".show-details-btn");

// Toggle project details
function initProjectDetails() {
  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.getAttribute("data-project");
      const detailsSection = document.getElementById(`${projectId}-details`);

      if (detailsSection.style.display === "block") {
        // Hide details
        detailsSection.style.display = "none";
        button.textContent = "Show Details";
      } else {
        // Show details
        detailsSection.style.display = "block";
        button.textContent = "Hide Details";

        // Smooth scroll to details
        setTimeout(() => {
          detailsSection.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 100);
      }
    });
  });
}

// Initialize image map functionality
function initImageMap() {
  const imageMaps = document.querySelectorAll("map");

  if (imageMaps.length > 0) {
    // If there are image maps, make sure they're responsive
    window.addEventListener("resize", () => {
      // This would typically use a library like jQuery maphilight
      // For this example, we'll just log that it would be responsive
      console.log("Image map would be resized to match image dimensions");
    });

    // Add click handlers for the areas
    const mapAreas = document.querySelectorAll("map area");
    mapAreas.forEach((area) => {
      area.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = area.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Make sure the details are visible
          const projectId = targetId.split("-")[0].substring(1); // Extract project ID from the href
          const detailsSection = document.getElementById(
            `${projectId}-details`
          );
          const button = document.querySelector(
            `[data-project="${projectId}"]`
          );

          if (detailsSection && button) {
            detailsSection.style.display = "block";
            button.textContent = "Hide Details";

            // Scroll to the specific section
            setTimeout(() => {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
            }, 100);
          }
        }
      });
    });
  }
}

// Initialize all portfolio functionality
document.addEventListener("DOMContentLoaded", () => {
  initProjectDetails();
  initImageMap();
});
