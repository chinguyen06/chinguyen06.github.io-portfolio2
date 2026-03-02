const roles = [
  "Data-Driven Financial Analyst",
  "Quantitative Researcher",
  "Investment Analyst",
  "Green Finance Researcher"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const current = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => isDeleting = true, 1200);
    }

  } else {
    typingElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 70);
}

typeEffect();
