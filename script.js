const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const whatsappNumber = "919686193025";

// Mobile menu opens and closes without leaving the page.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after a visitor taps a page link.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""));
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  formMessage.classList.remove("success");

  if (name.length < 2) {
    formMessage.textContent = "Please enter your name.";
    return;
  }

  if (!isValidPhone(phone)) {
    formMessage.textContent = "Please enter a valid 10-digit Indian mobile number.";
    return;
  }

  if (!isValidEmail(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formMessage.textContent = "Please add a few details about your print job.";
    return;
  }

  formMessage.classList.add("success");
  formMessage.textContent = "Opening WhatsApp with your enquiry...";
  const whatsappMessage = `Hello Supreme Enterprises, my name is ${name}. Phone: ${phone}. Email: ${email}. Enquiry: ${message}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  contactForm.reset();
});
