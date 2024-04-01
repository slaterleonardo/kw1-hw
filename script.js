const links = document.querySelectorAll("section.nav > a");
const sections = document.querySelectorAll(".content div")
console.log(links);
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
        sections[i].classList.add("hide");
    };

    link.classList.add("active");
    sections[index].classList.remove("hide");
  });
});
