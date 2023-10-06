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
    // Clean up by removing the event listener when the component unmounts
    return () => {
      // clean up observer
      // clean up event listener
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
