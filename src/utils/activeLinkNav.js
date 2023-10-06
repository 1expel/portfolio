
const activeLinkNav = (navRef, linksRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef) => {

  // get elements from references
  const nav = navRef.current;
  const links = linksRef.current;
  const landing = landingRef.current;
  const about = aboutRef.current;
  const courses = coursesRef.current;
  const projects = projectsRef.current;
  const skills = skillsRef.current;
  const sections = [landing, about, courses, projects, skills];

  // callback for scroll event
  const callback = () => {

    sections.forEach((current, i) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - nav.offsetHeight - 1; // nav is fixed at the top, must remove its height
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        console.log(current)
        // currIndex = i;
        links.children[i].classList.add("activeNavLink");
        links.children[i].classList.remove("navLink");
      } else {
        links.children[i].classList.remove("activeNavLink");
        links.children[i].classList.add("navLink");
      }
    });

  }

  window.addEventListener("scroll", callback);

}

export default activeLinkNav;
