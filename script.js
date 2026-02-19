// Dark mode toggle
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
