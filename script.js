// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form handler (front-end only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all required fields.";
            formStatus.style.color = "#f97373";
            return;
        }

        // Here you can integrate Formspree or your backend API
        formStatus.textContent = "Thank you! Your message has been recorded locally.";
        formStatus.style.color = "#4ade80";

        contactForm.reset();
    });
}
