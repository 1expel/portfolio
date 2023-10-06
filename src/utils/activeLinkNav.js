
const activeLinkNav = (navRef, linksRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef) => {

  // get elements from references
  const nav = navRef.current;
  const links = linksRef.current;
  const landing = landingRef.current;
  const about = aboutRef.current;
  const courses = coursesRef.current;
  const projects = projectsRef.current;
  const skills = skillsRef.current;
  const contact = contactRef.current;
  const sections = [landing, about, courses, projects, skills, contact];

  let index;

  // callback for scroll event
  const callback = () => {

    // check if at the bottom of the page (must be done first)
    // the logic for entering a section below doesnt work for the contacts section becuase it is too small & at the bottom of the page
    // 50 pixels from the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      console.log("here")
      index = sections.length - 1;
      console.log(index)
      links.children[index].classList.add("activeNavLink");
      links.children[index].classList.remove("navLink");
      for(let i = 0; i < sections.length - 1; i++) {
        console.log("loop")
        links.children[i].classList.remove("activeNavLink");
        links.children[i].classList.add("navLink");
      }
    }

    else {
      // check which section we are at
      sections.forEach((current, i) => {
        console.log("finna finesse")
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

  window.addEventListener("scroll", callback);

}

export default activeLinkNav;
