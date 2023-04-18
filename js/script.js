/* ========================    toggle icon navbar   ============================= */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* ========================    Scroll section octive link   ============================= */

const navLinks = document.querySelectorAll("header nav a");
const homeLink = document.querySelector('header nav a[href="#"]');

function handleScroll() {
  const sections = document.querySelectorAll("section");
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      section.offsetTop <= scrollPosition + 50 &&
      section.offsetTop + section.offsetHeight > scrollPosition + 50
    ) {
      const id = section.getAttribute("id");
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === `#${id}`) {
          navLink.classList.add("active");
        }
      });
    }
  });

  if (scrollPosition === 0) {
    homeLink.classList.add("active");
  } else {
    homeLink.classList.remove("active");
  }
  /* ========================    Sticky navbar   ============================= */

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  /* ========================    REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)   =============== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

window.addEventListener("scroll", handleScroll);

/* ========================    SCROLL REVEAL   =============== */

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });


/* ========================    MULTIPLE TEXTS   =============== */


var typed = new Typed('.multiple-text', {
  strings: ['Jr. Frontend Developer', 'UX/UI Designer'],
  typeSpeed: 90,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
});