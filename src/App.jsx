import React, { useRef, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import fixedNav from './utils/fixedNav';
import activeLinkNav from './utils/activeLinkNav';
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
    activeLinkNav(navRef, linksRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef);
    fixedNav(placeholderRef, navRef, landingRef); 
    // smoothScroll(linksRef, landingRef, aboutRef, coursesRef, projectsRef, skillsRef, contactRef)
    // Clean up by removing the event listener when the component unmounts
    return () => {
      // clean up observer
      // clean up event listener
    }
  }, []);

  const handleSmoothScroll = (idk) => {
    console.log(idk);
    let element;
    switch(idk) {
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
