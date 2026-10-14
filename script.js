document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    menuToggle.focus();
  }
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in"));
}
