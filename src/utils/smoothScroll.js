
const smoothScroll = (linksRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef) => {

  // get elements from references
  const links = linksRef.current;
  const landing = landingRef.current;
  const about = aboutRef.current;
  const courses = coursesRef.current;
  const projects = projectsRef.current;
  const skills = skillsRef.current;
  const contact = contactRef.current;
  const sections = [landing, about, courses, projects, skills, contact];

  // callback that has smooth scroll logic
  const smoothScroll = (element) => {
    // minus 100 to compensate for nav bar height is 100px
    const topPos = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
    });
  }

  // event listener on each nav link
  for(let i = 0; i < sections.length; i++) {
    links.children[i].addEventListener("click", () => smoothScroll(sections[i]));
  }

}

export default smoothScroll;
