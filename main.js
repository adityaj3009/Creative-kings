// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when clicking a nav link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Add scroll animations
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section:not(.hero)");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.8) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial fade-in for sections
document.querySelectorAll("section:not(.hero)").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 1s ease, transform 1s ease";
});

// Reviews slider navigation
const slider = document.querySelector(".reviews-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // card width + gap

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
});

// Handle touch swipe for reviews on mobile
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    // Swipe left
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
  if (touchEndX > touchStartX) {
    // Swipe right
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }
}

// Trigger scroll event on page load to show elements in viewport
window.addEventListener("load", () => {
  window.dispatchEvent(new Event("scroll"));
});
