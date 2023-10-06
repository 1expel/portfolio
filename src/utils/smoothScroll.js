
const smoothScroll = (sectionName, navRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef) => {

  let element;
  switch(sectionName) {
    case "landing":
      element = landingRef.current;
      break;
    case "about":
      element = aboutRef.current;
      break;
    case "courses":
      element = coursesRef.current;
      break;
    case "projects":
      element = projectsRef.current;
      break;
    case "skills":
      element = skillsRef.current;
      break;
    case "contact":
      element = contactRef.current;
      break;
  }
  // minus 100 to compensate for nav bar height is 100px
  const topPos = element.getBoundingClientRect().top + window.scrollY - navRef.current.offsetHeight;
  window.scrollTo({
    top: topPos, // scroll so that the element is at the top of the view
    behavior: 'smooth' // smooth scroll
  });

}

export default smoothScroll;
