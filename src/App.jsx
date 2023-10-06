import React, { useRef, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {handleFixedNav, options} from './utils/handleFixedNav';
import handleNavLinks from './utils/handleNavLinks';
import smoothScroll from './utils/smoothScroll';

function App() {

  // Create refs for child components
  const placeholderRef = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // useEffect to listen for nav & landing mounting
  useEffect(() => {

    // get elements from references
    const placeholder = placeholderRef.current;
    const nav = navRef.current;
    const links = linksRef.current;
    const landing = landingRef.current;
    const about = aboutRef.current;
    const courses = coursesRef.current;
    const projects = projectsRef.current;
    const skills = skillsRef.current;
    const contact = contactRef.current;
    const sections = [landing, about, courses, projects, skills, contact];

    // intersection observer object for toggling between fixed and default nav
    const observer = new IntersectionObserver((entries, observer) => handleFixedNav(entries, observer, placeholder, nav), options);

    // start observing landing component, when in/out of view we want to change navbar style
    if (landing) {
      observer.observe(landing);
    }

    // scroll event listener for active nav links based on section in view
    window.addEventListener("scroll", () => handleNavLinks(nav, links, sections)); 

    // Clean up by removing the event listener & intersection observer when the component unmounts
    return () => {
      // clean up observer
      if (landingRef.current) {
        observer.unobserve(landingRef.current);
      }
      // clean up event listener
      window.removeEventListener('scroll', () => handleNavLinks(entries, observer, nav, links, sections));
    }

  }, []);

  const handleSmoothScroll = (sectionName) => {
    smoothScroll(sectionName, navRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef)
  }

  return (
    <div>
      <div ref={placeholderRef}></div>
      <Nav navRef={navRef} linksRef={linksRef} handleSmoothScroll={handleSmoothScroll}/>
      <Landing landingRef={landingRef}/>
      <About aboutRef={aboutRef}/>
      <Courses coursesRef={coursesRef}/>
      <Projects projectsRef={projectsRef}/>
      <Skills skillsRef={skillsRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
  
}

export default App
