const menu = document.getElementById("menu");
const sections = document.querySelectorAll(".section");

function updateMenuState() {
  if (window.scrollY > 50) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      const links = menu.querySelectorAll("a");
      links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateMenuState);
window.addEventListener("load", updateMenuState);
