
const handleNavLinks = (nav, links, sections) => {

  let index;

  // check if at the bottom of the page (must be done first)
  // the logic for entering a section below doesnt work for the contacts section becuase it is too small & at the bottom of the page
  // 10 pixels from the bottom
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
    index = sections.length - 1;
    links.children[index].classList.add("activeNavLink");
    links.children[index].classList.remove("navLink");
    for(let i = 0; i < sections.length - 1; i++) {
      links.children[i].classList.remove("activeNavLink");
      links.children[i].classList.add("navLink");
    }
  }

  else {
    // check which section we are at
    sections.forEach((current, i) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - nav.offsetHeight - 1; // nav is fixed at the top, must remove its height
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // currIndex = i;
        links.children[i].classList.add("activeNavLink");
        links.children[i].classList.remove("navLink");
      } else {
        links.children[i].classList.remove("activeNavLink");
        links.children[i].classList.add("navLink");
      }
    });
  }

}

export default handleNavLinks;
