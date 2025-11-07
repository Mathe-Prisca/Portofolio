// Menu responsive
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Message de contact
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.textContent = "Merci, votre message a bien été envoyé ! 😊";
  form.reset();
});
