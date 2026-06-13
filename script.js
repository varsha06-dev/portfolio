// Typewriter effect for hero subtitle
const roles = [
  'ML Engineer',
  'NLP Enthusiast',
  'Full-Stack Developer',
  'Data Scientist',
  'Data Analyst',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    el.textContent = current.slice(0, --charIndex);
  } else {
    el.textContent = current.slice(0, ++charIndex);
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }

  setTimeout(type, delay);
}

type();

// Subtle scroll-fade for project rows
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.project-row').forEach((row) => {
  row.style.opacity = '0';
  row.style.transform = 'translateY(16px)';
  row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(row);
});
